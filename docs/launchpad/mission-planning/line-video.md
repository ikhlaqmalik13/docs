---
sidebar_position: 4
---

# Line Video Mission

Line video drone missions, also known as linear missions, are commonly used in applications where the drone needs to
capture a continuous video stream of a specific linear feature or area, such as a pipeline, a highway, or a coastline.
In a line video drone mission, the drone flies along a predefined flight path, following the linear feature, and
captures a continuous video stream from its camera. This data can then be used for inspection, monitoring, or analysis
purposes. Line video drone missions are particularly useful in applications such as infrastructure inspection, wildlife
tracking, or coastal erosion monitoring, where the drone needs to follow a specific path or feature and capture a
continuous video stream for further analysis.


## Create Mission

Select the `Line Video` mission type in the [Mission List Screen](../overview/mission-list-screen.md) to create the
mission. This will open the [Mission Planning Screen](../overview/mission-planning-screen.md).

![Create](img/line-video-create.jpg)

## Drawing

Ensure that the `Add/Remove Vertices` button has a negative sign. Then tap anywhere on the screen a marker will be
displayed which marks the first waypoint.

![Waypoint 1](img/line-video-waypoint-1.jpg)

Tap where you want to create the second waypoint. The blue line joining the two points is the path that will be followed
by the drone.

![Waypoint 2](img/line-video-waypoint-2.jpg)

Repeat the process to add more waypoints.

![Waypoint 3](img/line-video-waypoint-3.jpg)

You can add or edit waypoints as mentioned in [Mission Planning Screen](../overview/mission-list-screen.md) section.

## Parameter Selection

The following parameters are available for a `Line Video` mission:

- `Altitude`
- `RTL Altitude`
- `Speed`

Based on the parameters selected, the following values are calculated and displayed:

- `Total Waypoints`
- `Flight Distance`
- `Flight Duration`

![Parameters and Data](img/line-video-params.jpg)

Once done, click on the `Done` button to move on to the [Flight Screen](../overview/flight-screen.md).
