import { Question } from '../../types';

export const networkingQuestions: Question[] = [
  {
    id: 51,
    subject: 'networking',
    questionText: 'A LAN covers',
    options: ['Entire world', 'One building or campus', 'One country', 'One continent'],
    correctAnswerIndex: 1,
    explanation: 'A Local Area Network (LAN) covers a small geographical area such as a home, office, or campus.'
  },
  {
    id: 52,
    subject: 'networking',
    questionText: 'A WAN connects',
    options: ['Personal devices', 'Large geographic areas', 'One room', 'One switch only'],
    correctAnswerIndex: 1,
    explanation: 'A Wide Area Network (WAN) connects networks across large geographical distances, like across cities or countries.'
  },
  {
    id: 53,
    subject: 'networking',
    questionText: 'Which device forwards frames using MAC addresses?',
    options: ['Router', 'Switch', 'Modem', 'Firewall'],
    correctAnswerIndex: 1,
    explanation: 'A network switch operates at Layer 2 and uses MAC addresses to forward frames.'
  },
  {
    id: 54,
    subject: 'networking',
    questionText: 'Which device connects different IP networks?',
    options: ['Hub', 'Switch', 'Router', 'Bridge'],
    correctAnswerIndex: 2,
    explanation: 'A router operates at Layer 3 (Network layer) to forward packets between different IP networks.'
  },
  {
    id: 55,
    subject: 'networking',
    questionText: 'A hub operates at',
    options: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4'],
    correctAnswerIndex: 0,
    explanation: 'Hubs are legacy devices operating at Layer 1 (Physical layer) that broadcast all incoming traffic.'
  },
  {
    id: 56,
    subject: 'networking',
    questionText: 'A switch mainly operates at',
    options: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 7'],
    correctAnswerIndex: 1,
    explanation: 'Standard Ethernet switches operate primarily at Layer 2 (Data Link layer).'
  },
  {
    id: 57,
    subject: 'networking',
    questionText: 'A router mainly operates at',
    options: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4'],
    correctAnswerIndex: 2,
    explanation: 'Routers operate at Layer 3 (Network layer).'
  },
  {
    id: 58,
    subject: 'networking',
    questionText: 'Which topology is most common today?',
    options: ['Bus', 'Ring', 'Star', 'Mesh'],
    correctAnswerIndex: 2,
    explanation: 'The star topology (star-wired switch topology) is the most ubiquitous Ethernet architecture today.'
  },
  {
    id: 59,
    subject: 'networking',
    questionText: 'How many layers are in the OSI model?',
    options: ['4', '5', '6', '7'],
    correctAnswerIndex: 3,
    explanation: 'The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.'
  },
  {
    id: 60,
    subject: 'networking',
    questionText: 'Which OSI layer is responsible for routing?',
    options: ['Data Link', 'Transport', 'Network', 'Session'],
    correctAnswerIndex: 2,
    explanation: 'The Network layer (Layer 3) handles IP addressing and packet routing.'
  },
  {
    id: 61,
    subject: 'networking',
    questionText: 'Which OSI layer uses MAC addresses?',
    options: ['Physical', 'Data Link', 'Network', 'Application'],
    correctAnswerIndex: 1,
    explanation: 'The Data Link layer (Layer 2) uses physical MAC addresses.'
  },
  {
    id: 62,
    subject: 'networking',
    questionText: 'Which OSI layer uses IP addresses?',
    options: ['Physical', 'Data Link', 'Network', 'Session'],
    correctAnswerIndex: 2,
    explanation: 'The Network layer (Layer 3) uses logical IP addresses.'
  },
  {
    id: 63,
    subject: 'networking',
    questionText: 'Which transport protocol is reliable?',
    options: ['UDP', 'TCP', 'ICMP', 'ARP'],
    correctAnswerIndex: 1,
    explanation: 'TCP is connection-oriented and offers reliable, ordered delivery with error recovery.'
  },
  {
    id: 64,
    subject: 'networking',
    questionText: 'Which protocol is connectionless?',
    options: ['TCP', 'UDP', 'SSH', 'FTP'],
    correctAnswerIndex: 1,
    explanation: 'UDP (User Datagram Protocol) is a lightweight, connectionless transport protocol.'
  },
  {
    id: 65,
    subject: 'networking',
    questionText: 'Encapsulation converts data into',
    options: ['Data → Segment → Packet → Frame → Bits', 'Bits → Frame → Packet', 'Packet → Data', 'None'],
    correctAnswerIndex: 0,
    explanation: 'As data moves down the OSI stack, it becomes Segment (L4) -> Packet (L3) -> Frame (L2) -> Bits (L1).'
  },
  {
    id: 66,
    subject: 'networking',
    questionText: 'A MAC address is',
    options: ['16 bits', '32 bits', '48 bits', '128 bits'],
    correctAnswerIndex: 2,
    explanation: 'A MAC address is a 48-bit (6-byte) hexadecimal address.'
  },
  {
    id: 67,
    subject: 'networking',
    questionText: 'IPv4 addresses are',
    options: ['16 bits', '32 bits', '64 bits', '128 bits'],
    correctAnswerIndex: 1,
    explanation: 'IPv4 addresses consist of 32 bits divided into 4 octets.'
  },
  {
    id: 68,
    subject: 'networking',
    questionText: 'IPv6 addresses are',
    options: ['32 bits', '48 bits', '64 bits', '128 bits'],
    correctAnswerIndex: 3,
    explanation: 'IPv6 addresses are 128-bit hexadecimal addresses.'
  },
  {
    id: 69,
    subject: 'networking',
    questionText: 'Which IP range is private?',
    options: ['8.8.8.8', '192.168.1.10', '150.10.1.1', '200.20.20.20'],
    correctAnswerIndex: 1,
    explanation: '192.168.0.0/16 is defined in RFC 1918 as a private IPv4 address space.'
  },
  {
    id: 70,
    subject: 'networking',
    questionText: '/24 equals',
    options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'],
    correctAnswerIndex: 2,
    explanation: 'CIDR prefix /24 corresponds to the subnet mask 255.255.255.0 (24 network bits).'
  },
  {
    id: 71,
    subject: 'networking',
    questionText: 'DNS converts',
    options: ['MAC to IP', 'Domain names to IP addresses', 'IP to MAC', 'TCP to UDP'],
    correctAnswerIndex: 1,
    explanation: 'DNS (Domain Name System) maps human-readable domain names to numerical IP addresses.'
  },
  {
    id: 72,
    subject: 'networking',
    questionText: 'DHCP automatically assigns',
    options: ['CPU speed', 'IP configuration', 'Passwords', 'Hostnames only'],
    correctAnswerIndex: 1,
    explanation: 'DHCP automatically provides clients with IP addresses, subnet masks, gateways, and DNS servers.'
  },
  {
    id: 73,
    subject: 'networking',
    questionText: 'NAT translates',
    options: ['Public to MAC', 'Private IPs to public IPs', 'DNS records', 'TCP to UDP'],
    correctAnswerIndex: 1,
    explanation: 'Network Address Translation (NAT) translates internal private IP addresses to a public IP address.'
  },
  {
    id: 74,
    subject: 'networking',
    questionText: 'ARP maps',
    options: ['IP to MAC', 'MAC to DNS', 'TCP to IP', 'UDP to MAC'],
    correctAnswerIndex: 0,
    explanation: 'Address Resolution Protocol (ARP) maps a known IPv4 address to its corresponding MAC address.'
  },
  {
    id: 75,
    subject: 'networking',
    questionText: 'Which protocol is commonly used by ping?',
    options: ['TCP', 'UDP', 'ICMP', 'ARP'],
    correctAnswerIndex: 2,
    explanation: 'The ping utility utilizes ICMP (Internet Control Message Protocol) Echo Request and Reply messages.'
  },
  {
    id: 76,
    subject: 'networking',
    questionText: 'HTTPS uses which default port?',
    options: ['80', '22', '443', '25'],
    correctAnswerIndex: 2,
    explanation: 'HTTPS operates over TCP port 443 by default.'
  },
  {
    id: 77,
    subject: 'networking',
    questionText: 'SSH uses which default port?',
    options: ['20', '21', '22', '23'],
    correctAnswerIndex: 2,
    explanation: 'Secure Shell (SSH) uses TCP port 22.'
  },
  {
    id: 78,
    subject: 'networking',
    questionText: 'DNS uses which default port?',
    options: ['25', '53', '80', '110'],
    correctAnswerIndex: 1,
    explanation: 'DNS uses UDP and TCP port 53.'
  },
  {
    id: 79,
    subject: 'networking',
    questionText: 'A VLAN is used to',
    options: ['Increase CPU speed', 'Create logical network segmentation', 'Replace routers', 'Replace switches'],
    correctAnswerIndex: 1,
    explanation: 'A Virtual LAN logically segments broadcast domains on switches.'
  },
  {
    id: 80,
    subject: 'networking',
    questionText: 'A trunk port carries',
    options: ['One VLAN only', 'Multiple VLANs', 'Only management traffic', 'Only voice traffic'],
    correctAnswerIndex: 1,
    explanation: 'Trunk ports carry tagged traffic for multiple VLANs across switch links (e.g. via 802.1Q).'
  },
  {
    id: 81,
    subject: 'networking',
    questionText: 'Which VLAN type is assigned to end devices?',
    options: ['Trunk', 'Access', 'Native', 'Dynamic'],
    correctAnswerIndex: 1,
    explanation: 'Access ports connect end-user devices to a single designated VLAN.'
  },
  {
    id: 82,
    subject: 'networking',
    questionText: 'Communication between different VLANs requires a',
    options: ['Hub', 'Bridge', 'Router or Layer 3 Switch', 'Repeater'],
    correctAnswerIndex: 2,
    explanation: 'Inter-VLAN routing requires a Layer 3 device such as a router or Layer 3 switch.'
  },
  {
    id: 83,
    subject: 'networking',
    questionText: 'Which routing protocol is a link-state protocol?',
    options: ['RIP', 'OSPF', 'ARP', 'ICMP'],
    correctAnswerIndex: 1,
    explanation: 'OSPF (Open Shortest Path First) is a popular link-state dynamic routing protocol.'
  },
  {
    id: 84,
    subject: 'networking',
    questionText: 'Which routing protocol uses hop count as its metric?',
    options: ['BGP', 'RIP', 'OSPF', 'EIGRP'],
    correctAnswerIndex: 1,
    explanation: 'RIP (Routing Information Protocol) uses hop count as its metric (max 15 hops).'
  },
  {
    id: 85,
    subject: 'networking',
    questionText: 'Static routing is',
    options: ['Learned automatically', 'Configured manually', 'Based on VLANs', 'Based on DHCP'],
    correctAnswerIndex: 1,
    explanation: 'Static routes are manually entered into the routing table by network administrators.'
  },
  {
    id: 86,
    subject: 'networking',
    questionText: 'A routing table stores',
    options: ['User accounts', 'MAC addresses only', 'Destination networks and next hops', 'DNS records'],
    correctAnswerIndex: 2,
    explanation: 'A routing table lists network destinations and the next-hop IP/interface to reach them.'
  },
  {
    id: 87,
    subject: 'networking',
    questionText: 'Ethernet operates primarily at which OSI layer?',
    options: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4'],
    correctAnswerIndex: 1,
    explanation: 'Ethernet operates at Layer 2 (Data Link layer) and Layer 1 (Physical layer).'
  },
  {
    id: 88,
    subject: 'networking',
    questionText: 'Full duplex means',
    options: ['Data flows in one direction', 'Data flows in both directions simultaneously', 'Data flows slowly', 'Wireless only'],
    correctAnswerIndex: 1,
    explanation: 'Full duplex allows simultaneous two-way transmission without collisions.'
  },
  {
    id: 89,
    subject: 'networking',
    questionText: 'Historically, a crossover cable connected',
    options: ['PC to Switch', 'Router to Switch', 'Switch to Switch', 'PC to Printer'],
    correctAnswerIndex: 2,
    explanation: 'Crossover cables connected like devices (e.g. Switch to Switch or Router to Router).'
  },
  {
    id: 90,
    subject: 'networking',
    questionText: 'Which cable is used to configure Cisco devices directly?',
    options: ['Fiber', 'Straight-through', 'Console cable', 'Coaxial'],
    correctAnswerIndex: 2,
    explanation: 'A rollover/console cable connects a PC serial/USB port to the Cisco console port for CLI management.'
  },
  {
    id: 91,
    subject: 'networking',
    questionText: 'Which Cisco command enters privileged EXEC mode?',
    options: ['configure terminal', 'enable', 'login', 'exec'],
    correctAnswerIndex: 1,
    explanation: 'enable moves from user EXEC mode (Router>) to privileged EXEC mode (Router#).'
  },
  {
    id: 92,
    subject: 'networking',
    questionText: 'Which command enters global configuration mode?',
    options: ['enable', 'configure terminal', 'interface', 'config start'],
    correctAnswerIndex: 1,
    explanation: 'configure terminal (or conf t) moves from privileged EXEC to global configuration mode.'
  },
  {
    id: 93,
    subject: 'networking',
    questionText: 'Which command assigns an IP address to an interface?',
    options: ['ipconfig', 'ip address', 'set ip', 'assign ip'],
    correctAnswerIndex: 1,
    explanation: 'In Cisco interface config mode: ip address <IP> <SubnetMask>.'
  },
  {
    id: 94,
    subject: 'networking',
    questionText: 'Which command enables an interface?',
    options: ['up', 'enable', 'no shutdown', 'startup'],
    correctAnswerIndex: 2,
    explanation: 'no shutdown turns on (enables) a Cisco router/switch interface.'
  },
  {
    id: 95,
    subject: 'networking',
    questionText: 'Which command saves the running configuration?',
    options: ['save', 'write', 'copy running-config startup-config', 'backup config'],
    correctAnswerIndex: 2,
    explanation: 'copy running-config startup-config (or wr) saves the RAM config to NVRAM.'
  },
  {
    id: 96,
    subject: 'networking',
    questionText: 'Which command displays interface status?',
    options: ['show ip route', 'show interfaces', 'show ip interface brief', 'ipconfig'],
    correctAnswerIndex: 2,
    explanation: 'show ip interface brief provides a concise view of all interfaces, IP addresses, and status.'
  },
  {
    id: 97,
    subject: 'networking',
    questionText: 'Which wireless security standard is the strongest?',
    options: ['WEP', 'WPA', 'WPA2', 'WPA3'],
    correctAnswerIndex: 3,
    explanation: 'WPA3 is the latest and most secure Wi-Fi encryption standard.'
  },
  {
    id: 98,
    subject: 'networking',
    questionText: 'Which protocol is more secure for remote management?',
    options: ['Telnet', 'FTP', 'SSH', 'HTTP'],
    correctAnswerIndex: 2,
    explanation: 'SSH encrypts all management traffic, whereas Telnet sends commands in plaintext.'
  },
  {
    id: 99,
    subject: 'networking',
    questionText: 'Which tool shows the path packets take to a destination?',
    options: ['ping', 'traceroute', 'arp', 'route'],
    correctAnswerIndex: 1,
    explanation: 'traceroute (or tracert in Windows) reveals each router hop along the path to a destination.'
  },
  {
    id: 100,
    subject: 'networking',
    questionText: 'Which Cisco command displays the routing table?',
    options: ['show running-config', 'show ip route', 'show startup-config', 'show version'],
    correctAnswerIndex: 1,
    explanation: 'show ip route outputs all connected, static, and dynamic routes in the routing table.'
  }
];
