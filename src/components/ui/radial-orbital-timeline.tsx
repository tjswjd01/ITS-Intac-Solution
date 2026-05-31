"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Link, Zap, type LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: LucideIcon;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  className?: string;
  /** Orbit scale — 1.3 ≈ 30% larger */
  scale?: number;
  selectedNodeId?: number | null;
  onSelectedNodeChange?: (id: number | null) => void;
  hideNodeLabels?: boolean;
}

const BASE_ORBIT_RADIUS = 200;
const BASE_MIN_HEIGHT = 560;

export default function RadialOrbitalTimeline({
  timelineData,
  className,
  scale = 1,
  selectedNodeId,
  onSelectedNodeChange,
  hideNodeLabels = false,
}: RadialOrbitalTimelineProps) {
  const isControlled = onSelectedNodeChange !== undefined;
  const orbitRadius = BASE_ORBIT_RADIUS * scale;
  const minHeight = Math.round(BASE_MIN_HEIGHT * scale);

  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState({ x: 0, y: 0 });
  const [uncontrolledActiveId, setUncontrolledActiveId] = useState<number | null>(null);

  const activeNodeId = isControlled ? (selectedNodeId ?? null) : uncontrolledActiveId;

  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const getRelatedItems = useCallback(
    (itemId: number): number[] => {
      return timelineData.find((item) => item.id === itemId)?.relatedIds ?? [];
    },
    [timelineData],
  );

  const centerViewOnNode = useCallback(
    (nodeId: number) => {
      const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
      const totalNodes = timelineData.length;
      const targetAngle = (nodeIndex / totalNodes) * 360;
      setRotationAngle(270 - targetAngle);
    },
    [timelineData],
  );

  const openNode = useCallback(
    (id: number) => {
      setExpandedItems({ [id]: true });
      if (isControlled) {
        onSelectedNodeChange?.(id);
      } else {
        setUncontrolledActiveId(id);
      }
      setAutoRotate(false);

      const relatedItems = getRelatedItems(id);
      const newPulseEffect: Record<number, boolean> = {};
      relatedItems.forEach((relId) => {
        newPulseEffect[relId] = true;
      });
      setPulseEffect(newPulseEffect);
      centerViewOnNode(id);
    },
    [centerViewOnNode, getRelatedItems, isControlled, onSelectedNodeChange],
  );

  const closeAll = useCallback(() => {
    setExpandedItems({});
    setPulseEffect({});
    setAutoRotate(true);
    if (isControlled) {
      onSelectedNodeChange?.(null);
    } else {
      setUncontrolledActiveId(null);
    }
  }, [isControlled, onSelectedNodeChange]);

  const toggleItem = useCallback(
    (id: number) => {
      if (expandedItems[id] && activeNodeId === id) {
        closeAll();
      } else {
        openNode(id);
      }
    },
    [activeNodeId, closeAll, expandedItems, openNode],
  );

  useEffect(() => {
    if (!isControlled || selectedNodeId == null) return;
    if (expandedItems[selectedNodeId]) return;
    openNode(selectedNodeId);
  }, [expandedItems, isControlled, openNode, selectedNodeId]);

  useEffect(() => {
    if (!isControlled || selectedNodeId !== null) return;
    setExpandedItems({});
    setPulseEffect({});
    setAutoRotate(true);
  }, [isControlled, selectedNodeId]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      closeAll();
    }
  };

  useEffect(() => {
    if (!autoRotate) return;

    const rotationTimer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
    }, 50);

    return () => clearInterval(rotationTimer);
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = orbitRadius * Math.cos(radian) + centerOffset.x;
    const y = orbitRadius * Math.sin(radian) + centerOffset.y;
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.45, Math.min(1, 0.45 + 0.55 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, zIndex, opacity };
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "border-white/40 bg-[#0A3A86] text-white";
      case "in-progress":
        return "border-white bg-white text-[#0A3A86]";
      case "pending":
      default:
        return "border-white/30 bg-white/5 text-white/80";
    }
  };

  const getStatusLabel = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "INTEGRATED";
      case "in-progress":
        return "ACTIVE";
      case "pending":
      default:
        return "STANDBY";
    }
  };

  const outerRing = orbitRadius * 1.92;
  const innerRing = orbitRadius * 1.1;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full items-center justify-center overflow-visible",
        className,
      )}
      style={{ minHeight }}
      onClick={handleContainerClick}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <div
          ref={orbitRef}
          className="absolute flex h-full w-full items-center justify-center"
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px) scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          <div className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-[#0A3A86]/30 backdrop-blur-sm">
            <div className="absolute h-20 w-20 animate-ping rounded-full border border-white/10 opacity-40" />
            <div
              className="absolute h-24 w-24 rounded-full border border-white/[0.06] opacity-30"
              style={{
                animation: "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                animationDelay: "0.6s",
              }}
            />
            <div className="h-8 w-8 rounded-full bg-white/90 shadow-[0_0_24px_rgba(10,58,134,0.45)]" />
          </div>

          <div
            className="absolute rounded-full border border-white/10"
            style={{ width: outerRing, height: outerRing }}
          />
          <div
            className="absolute rounded-full border border-[#0A3A86]/20"
            style={{ width: innerRing, height: innerRing }}
          />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute cursor-pointer transition-all duration-700"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={cn(
                    "absolute -inset-1 rounded-full",
                    isPulsing && "animate-pulse duration-1000",
                  )}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(10,58,134,0.35) 0%, rgba(10,58,134,0) 70%)",
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                  aria-hidden
                />

                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300",
                    isExpanded
                      ? "scale-150 border-white bg-white text-[#0A3A86] shadow-lg shadow-white/20"
                      : isRelated
                        ? "animate-pulse border-white bg-white/40 text-[#0A3A86]"
                        : "border-white/35 bg-[#0B1220] text-white",
                  )}
                >
                  <Icon size={16} strokeWidth={1.75} aria-hidden />
                </div>

                {!hideNodeLabels ? (
                  <div
                    className={cn(
                      "absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300",
                      isExpanded ? "scale-125 text-white" : "text-white/65",
                    )}
                  >
                    {item.title}
                  </div>
                ) : null}

                {isExpanded ? (
                  <Card className="absolute left-1/2 top-[3.25rem] z-[300] w-72 -translate-x-1/2 overflow-visible rounded-xl border-white/20 bg-[#0B1220] text-white shadow-xl shadow-black/40 backdrop-blur-lg">
                    <div
                      className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-white/40"
                      aria-hidden
                    />
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Badge
                          className={cn("px-2 text-[10px]", getStatusStyles(item.status))}
                        >
                          {getStatusLabel(item.status)}
                        </Badge>
                        <span className="font-mono text-[10px] text-white/45">{item.date}</span>
                      </div>
                      <CardTitle className="mt-2 text-sm text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs leading-relaxed text-white/75">
                      <p>{item.content}</p>

                      <div className="mt-4 border-t border-white/10 pt-3">
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="flex items-center text-white/60">
                            <Zap size={10} className="mr-1" aria-hidden />
                            Integration Level
                          </span>
                          <span className="font-mono text-white/80">{item.energy}%</span>
                        </div>
                        <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full bg-gradient-to-r from-[#0A3A86] via-[#3b5f9a] to-white/70"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>

                      {item.relatedIds.length > 0 ? (
                        <div className="mt-4 border-t border-white/10 pt-3">
                          <div className="mb-2 flex items-center">
                            <Link size={10} className="mr-1 text-white/50" aria-hidden />
                            <h4 className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="h-6 rounded-md border-white/15 px-2 py-0 text-[10px]"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={8}
                                    className="ml-1 opacity-60"
                                    aria-hidden
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      ) : null}
                    </CardContent>
                  </Card>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
