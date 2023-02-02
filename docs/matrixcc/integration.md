---
sidebar_position: 6
---

# Integration

In this section you'd find the electronics integration of main components. 
![MatrixCC Integration](img/matrixcc-integration.png)

## ANTENNAS
- Connect the 2 antennas of the cellular module (MAIN | DIV)
- For simplicity the antennas have been removed in the following sections.

![Antennas](img/antennas-removebg-preview.png)

## P1 : FLIGHT CONTROLLER
- Cable : 6 pin
- Connect the P1 port to your autopilot on the TELEM port.
- Baud rate = 57600

![Autopilot](img/autopilot-removebg-preview.png)

Please refer to the pin out diagram below [*Note- 5V, CTS & RTS have been disconnected to avoid signal fluctuations*]

![PIN OUT- Flight Controller](img/flight-controller-pin-out.png)


## P2 : RADIO LINK
- Cable : 6 pin
- Connect the P2 port of the MatrixCC to the air unit using a UART cable. 
- *Standard Connection:* Connect the air unit to your autopilot.

Please refer to the pin out diagram below. [*Note- Rx Tx may be swapped*]

![PIN OUT- Radio Link](img/radio-link-pin-out.png)


### Herelink

![Herelink](img/herelink-removebg-preview.png)

### MK15

![MK15](img/mk15-removebg-preview.png)

## P3 : POWER
- Cable : Power Connector 
- Power requirements : 5V | 2A (max)
- Use the power connector given in the box to power the MatrixCC.
- Always plug in antenna before powering on​

![Power](img/battery-removebg-preview.png)

## P4 : NETWORK HUB (optional)
- Cable : 4 pin
- Connect the P4 port of the MatrixCC to the P1 port of the Network Hub. 

![Network Hub](img/ethernet-removebg-preview.png)

## P5 : TAMPER PROOFING (optional)
- Cable : 6 pin 
- Connect the tampering proofing module to the port P5 using the cable given in the box. 
- Connect the trigger module to the S1 and S2 ports. 

![Tamper Proof](img/tamper-proof-removebg-preview.png)

## PAYLOAD (optional)
This section explains the integration of MatrixCC with an IP camera. To illustrate an example the IP camera used is a SIYI MK15 IP67.
*USB type:* Use the 4 pin JST to USB connector.
Power supply should not be given into 4-pin and 6-pin JST connectors (use them as output only)​​

### IP camera 

- An IP camera, or Internet Protocol camera, can transmit and receive data via a computer network and the internet.
- Connect it to the network hub. 
- In case of the SIYI MK15 IP camera, connect the wire of the camera to the P4 port of the Network Hub. 
- Connect the air unit to the network hub [to receive the video feed on [launchpad](/docs/launchpad/introduction.md)] 

![IP Camera](img/ip-camera-removebg-preview.png)