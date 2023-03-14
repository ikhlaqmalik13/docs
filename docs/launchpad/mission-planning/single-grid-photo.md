---
sidebar_position: 1
---

# Single Grid Photo Mission

Single grid drone missions are commonly used in various applications, such as aerial photography, surveying, mapping,
and inspection. The drone flies over a designated area and captures images or data points at predefined intervals. This
data can then be used to create 2D or 3D maps, identify changes over time, or inspect infrastructure for damage or
maintenance needs. Single grid drone missions are particularly useful in areas that are difficult or dangerous to access
by foot or vehicle, and can save time and costs compared to traditional surveying methods.

## Create Mission

Select the `Single Grid Photo` mission type in the [Mission List Screen](../overview/mission-list-screen.md) to create
the mission. This will open the [Mission Planning Screen](../overview/mission-planning-screen.md).

![Create](img/single-grid-photo-create.jpg)

## Drawing

Ensure that the `Add/Remove Vertices` button has a negative sign. Then tap anywhere on the screen a marker will be
displayed which marks the first vertex of the polygon.

![Polygon 1](img/single-grid-photo-polygon-1.jpg)

Tap where you want to create the second vertex of the polygon. The blue line joining the two points is the boundary of
the polygon.

![Polygon 2](img/single-grid-photo-polygon-2.jpg)

Repeat the process to add more vertices to the polygon.

![Polygon 3](img/single-grid-photo-polygon-3.jpg)

Finally, tap on the first vertex to complete the polygon.

![Polygon 4](img/single-grid-photo-polygon-4.jpg)

You can add or edit vertices as mentioned in [Mission Planning Screen](../overview/mission-list-screen.md) section.

## Parameter Selection

The following parameters are available for a `Single Grid Photo` mission:

- `Altitude`
- `RTL Altitude`
- `Speed`
- `Camera`: Available camera types.
- `Front Overlap`: Percentage longitudinal overlap between the images.
- `Side Overlap`: Percentage lateral overlap between the images.
- `Heading Angle`: Angle of movement of the drone.
- `Flip Direction`: Exchange start and end points.
- `Fixed Yaw`: Enable to do the mission at a fixed yaw angle.
- `Lock to Path`: Enable to take the yaw angle relative to the path.
- `Yaw Angle`: Yaw angle in case of fixed yaw.

![Parameters](img/single-grid-photo-params.jpg)

Based on the parameters selected, the following values are calculated and displayed:

- `Polygon Area`
- `GSD`: Ground sampling distance.
- `Total Photos`: Estimated photos count.
- `Photo Interval`: Time interval between two consecutive photos.
- `Flight Distance`
- `Flight Duration`

![Data](img/single-grid-photo-data.jpg)

The factors deciding the camera interval are `Altitude`, `Speed`, `Front Overlap`. Always make sure that the combination
of the above parameters results in a `Camera Interval` which is at least **2.5 seconds** (this value depends on the
camera type), otherwise there's a chance that the drone may miss photos.

The red color of the `Photo Interval` value shows that it is too less.

Once done, click on the `Done` button to move on to the [Flight Screen](../overview/flight-screen.md).
