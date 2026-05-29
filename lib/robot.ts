/** 3-view turnaround sheet (front · side · back) — PNG on white. */
export const ROBOT_ASSET = "/robot/robot_asset.png";
export const ROBOT_ASSET_FALLBACK = "/robot/robot.jpeg";

export const ROBOT_VIEWS = ["front", "side", "back"] as const;
export type RobotView = (typeof ROBOT_VIEWS)[number];

/** Sprite translateX % for each view (image is 300% container width). */
export const ROBOT_VIEW_X: Record<RobotView, string> = {
  front: "0%",
  side: "-33.333%",
  back: "-66.666%",
};
