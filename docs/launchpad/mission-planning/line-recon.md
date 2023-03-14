---
sidebar_position: 5
---

# Line Recon Mission

Line recon drone missions, also known as linear surveillance missions, are commonly used in surveillance and
reconnaissance applications where the drone needs to capture images or video along a specific linear feature or area,
such as a border, a coastline, or a pipeline. In a line recon drone mission, the drone flies along a predefined flight
path, following the linear feature. This mission is designed for automatic path following with manual payload control.
This data obtained can then be used to monitor and detect any activity or changes along the linear feature or area. Line
recon drone missions are particularly useful in applications such as border patrol, coastal surveillance, or
infrastructure security, where the drone needs to continuously monitor a specific path or feature for potential threats
or incidents.


## Create Mission

Select the `Line Recon` mission type in the [Mission List Screen](../overview/mission-list-screen.md) to create the
mission. This will open the [Mission Planning Screen](../overview/mission-planning-screen.md).

![Create](img/line-recon-create.jpg)

## Drawing

Ensure that the `Add/Remove Vertices` button has a negative sign. Then tap anywhere on the screen a marker will be
displayed which marks the first waypoint.

![Waypoint 1](img/line-recon-waypoint-1.jpg)

Tap where you want to create the second waypoint. The blue line joining the two points is the path that will be followed
by the drone.

![Waypoint 2](img/line-recon-waypoint-2.jpg)

Repeat the process to add more waypoints.

![Waypoint 3](img/line-recon-waypoint-3.jpg)

You can add or edit waypoints as mentioned in [Mission Planning Screen](../overview/mission-list-screen.md) section.

## Parameter Selection

The following parameters are available for a `Line Recon` mission:

- `Altitude`
- `RTL Altitude`
- `Speed`

Based on the parameters selected, the following values are calculated and displayed:

- `Total Waypoints`
- `Flight Distance`
- `Flight Duration`

![Parameters and Data](img/line-recon-params.jpg)

Once done, click on the `Done` button to move on to the [Flight Screen](../overview/flight-screen.md).
