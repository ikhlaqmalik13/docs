---
sidebar_position: 3
---

# Hardware Setup

NextCC acts as a bridge between the flight controller and the telemetry air unit. It does the task of message processing
and validation for added security missing in general MAVLink systems.

Apart from this, the NextCC can be connected with Internet Protocol (IP) cameras to provide low latency live video
stream

![NextCC Integration](./img/hardware-setup-intro.png)

## Antennas

Connect the 2 antennas to the **MAIN** and **DIV** pins of the cellular module.

![Antennas](./img/hardware-setup-antennas.png)

*Note: For simplicity the antennas have been removed in the following sections.*

## SIM Card

The SIM card should be inserted as shown.

![SIM Card](./img/hardware-setup-sim.png)

## Flight Controller \[P1\]

- Take a 6 pin JST cable provided with the NextCC and make sure that the for Rx, Tx and GND pins correspond with the Tx,
  Rx and GND of the Pixhawk respectively.
- Remove the other wires (especially the 5V wire).
- Set the baud rate of any of Pixhawk's **TELEM** ports to **57600** and make sure that it is configured as a
  **MAVLink 2** output.
- Use the JST cable to connect the **TELEM** port of the Pixhawk with the **P1 (UART2)** port of the NextCC.

![FCU](./img/hardware-setup-fcu.png)

![FCU Pin Out](./img/hardware-setup-fcu-pin-out.png)

*Note: Do not power the Pixhawk or any other component using the 5V provided by the NextCC.*

## Telemetry Receiver \[P2\]

- Take a 6 pin JST cable provided with the NextCC and make sure that the for Rx, Tx and GND pins correspond with the Tx,
  Rx and GND of the telemetry receiver respectively.
- Remove the other wires (especially the 5V wire).
- Use the JST cable to connect the **UART/Serial** port of the telemetry receiver with the **P2 (UART3)** port of the
  NextCC.


![Radio Link Pin Out](./img/hardware-setup-telem-rec-pin-out.png)

*Note: The pin out for a telemetry receiver is different from a Pixhawk. Please refer to the pin out diagrams of the*
*receiver and NextCC. The users may have to swap the Rx and Tx cables in the JST connector.*

### Herelink

![Herelink](./img/hardware-setup-telem-rec-herelink.png)

### MK15

![MK15](./img/hardware-setup-telem-rec-mk15.png)

## Power \[P3\]

- NextCC requires a **constant 5V** supply with a **max current of 2A**.
- Use the power connector given in the box to power the NextCC or solder the wires to the base pad of the power input.
- Make sure that there are no voltage fluctuations that may occur in flight.
- Plug in the cellular antennas before powering on​.

![Power](./img/hardware-setup-power.png)

## Network Hub \[P4\] (Optional)

- Connect any port of the Network Hub with the **P4 (ETH)** port of the NextCC.
- Use the pin out diagram to connect an IP camera to the network hub.

![Network Hub](./img/hardware-setup-ethernet.png)

![Network Hub Pin out](./img/hardware-setup-ethernet-pin-out.png)

## Tamper Proof Module \[P5\] (Optional)

- Connect the tamper proof module to the **P5** port.
- Connect the trigger to the S1 and S2 ports marked on the tamper proof module.

![Tamper Proof](./img/hardware-setup-tamper-proof.png)

![Tamper Proof Pin Out](./img/hardware-setup-tamper-proof-pin-out.png)
