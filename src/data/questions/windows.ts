import { Question } from '../../types';

export const windowsQuestions: Question[] = [
  {
    id: 201,
    subject: 'windows',
    questionText: 'Windows is developed by',
    options: ['Apple', 'Google', 'Microsoft', 'IBM'],
    correctAnswerIndex: 2,
    explanation: 'Windows is developed and maintained by Microsoft.'
  },
  {
    id: 202,
    subject: 'windows',
    questionText: 'Which file system is the default for modern Windows?',
    options: ['FAT16', 'FAT32', 'NTFS', 'ext4'],
    correctAnswerIndex: 2,
    explanation: 'NTFS (New Technology File System) is the primary default file system for modern Windows operating systems.'
  },
  {
    id: 203,
    subject: 'windows',
    questionText: 'Which tool manages disks and partitions?',
    options: ['Task Manager', 'Device Manager', 'Disk Management', 'Event Viewer'],
    correctAnswerIndex: 2,
    explanation: 'Disk Management (diskmgmt.msc) handles drive partitioning, formatting, and volume management.'
  },
  {
    id: 204,
    subject: 'windows',
    questionText: 'Which utility displays running processes and performance?',
    options: ['Registry Editor', 'Task Manager', 'Disk Cleanup', 'Services'],
    correctAnswerIndex: 1,
    explanation: 'Task Manager displays active processes, startup applications, and real-time CPU/RAM/Disk performance.'
  },
  {
    id: 205,
    subject: 'windows',
    questionText: 'Which command opens Command Prompt?',
    options: ['cmd', 'bash', 'shell', 'terminal'],
    correctAnswerIndex: 0,
    explanation: 'cmd launches the Windows Command Prompt executable.'
  },
  {
    id: 206,
    subject: 'windows',
    questionText: 'Which command displays the IP configuration?',
    options: ['ifconfig', 'ipconfig', 'netconfig', 'route'],
    correctAnswerIndex: 1,
    explanation: 'ipconfig outputs network adapter addresses, subnet masks, and default gateways in Windows.'
  },
  {
    id: 207,
    subject: 'windows',
    questionText: 'Which command releases the DHCP lease?',
    options: ['ipconfig /release', 'ipconfig /flushdns', 'ipconfig /renew', 'ipconfig /all'],
    correctAnswerIndex: 0,
    explanation: 'ipconfig /release releases the current DHCP IP lease for all adapters.'
  },
  {
    id: 208,
    subject: 'windows',
    questionText: 'Which command requests a new DHCP lease?',
    options: ['ipconfig /renew', 'ipconfig /release', 'ipconfig /displaydns', 'ping'],
    correctAnswerIndex: 0,
    explanation: 'ipconfig /renew requests a fresh IP address lease from the DHCP server.'
  },
  {
    id: 209,
    subject: 'windows',
    questionText: 'Which command clears the DNS cache?',
    options: ['ipconfig /renew', 'ipconfig /flushdns', 'nslookup', 'tracert'],
    correctAnswerIndex: 1,
    explanation: 'ipconfig /flushdns clears the client DNS resolver cache.'
  },
  {
    id: 210,
    subject: 'windows',
    questionText: 'Which command tests connectivity to another host?',
    options: ['netstat', 'ping', 'ipconfig', 'tasklist'],
    correctAnswerIndex: 1,
    explanation: 'ping tests connectivity by sending ICMP echo requests to a remote host.'
  },
  {
    id: 211,
    subject: 'windows',
    questionText: 'Which command traces the route to a destination?',
    options: ['trace', 'tracert', 'route', 'path'],
    correctAnswerIndex: 1,
    explanation: 'tracert displays the route and round-trip time to a remote network destination.'
  },
  {
    id: 212,
    subject: 'windows',
    questionText: 'Which command displays active network connections?',
    options: ['ipconfig', 'netstat', 'tasklist', 'nslookup'],
    correctAnswerIndex: 1,
    explanation: 'netstat shows active TCP/UDP connections, listening ports, and routing tables.'
  },
  {
    id: 213,
    subject: 'windows',
    questionText: 'Which command queries DNS servers?',
    options: ['nslookup', 'net use', 'ping', 'taskkill'],
    correctAnswerIndex: 0,
    explanation: 'nslookup queries DNS servers to diagnose name resolution issues.'
  },
  {
    id: 214,
    subject: 'windows',
    questionText: 'Which utility manages hardware devices?',
    options: ['Disk Cleanup', 'Device Manager', 'Event Viewer', 'Services'],
    correctAnswerIndex: 1,
    explanation: 'Device Manager (devmgmt.msc) handles driver updates, hardware status, and hardware enablement.'
  },
  {
    id: 215,
    subject: 'windows',
    questionText: 'Which utility shows system logs?',
    options: ['Event Viewer', 'Registry Editor', 'File Explorer', 'Task Scheduler'],
    correctAnswerIndex: 0,
    explanation: 'Event Viewer (eventvwr.msc) logs Application, Security, System, and setup events.'
  },
  {
    id: 216,
    subject: 'windows',
    questionText: 'Which utility edits the Windows Registry?',
    options: ['regedit', 'cmd', 'msconfig', 'gpedit'],
    correctAnswerIndex: 0,
    explanation: 'regedit opens the Windows Registry Editor.'
  },
  {
    id: 217,
    subject: 'windows',
    questionText: 'Which utility configures startup options?',
    options: ['msconfig', 'taskmgr', 'perfmon', 'explorer'],
    correctAnswerIndex: 0,
    explanation: 'msconfig (System Configuration) manages boot choices, services, and system tools.'
  },
  {
    id: 218,
    subject: 'windows',
    questionText: 'Which utility schedules automated tasks?',
    options: ['Task Manager', 'Task Scheduler', 'Device Manager', 'Disk Cleanup'],
    correctAnswerIndex: 1,
    explanation: 'Task Scheduler automates program and script execution based on triggers and events.'
  },
  {
    id: 219,
    subject: 'windows',
    questionText: 'Which utility removes temporary and unnecessary files?',
    options: ['Disk Cleanup', 'Disk Management', 'Defragment', 'Resource Monitor'],
    correctAnswerIndex: 0,
    explanation: 'Disk Cleanup (cleanmgr) deletes temporary files, caches, and system dumps.'
  },
  {
    id: 220,
    subject: 'windows',
    questionText: 'Which utility optimizes HDD performance?',
    options: ['Disk Cleanup', 'Defragment and Optimize Drives', 'Event Viewer', 'Device Manager'],
    correctAnswerIndex: 1,
    explanation: 'Defragment and Optimize Drives reorganizes fragmented data files on magnetic hard drives.'
  },
  {
    id: 221,
    subject: 'windows',
    questionText: 'Which Windows feature restores previous system settings?',
    options: ['System Restore', 'Windows Update', 'Recovery Partition', 'Task Scheduler'],
    correctAnswerIndex: 0,
    explanation: 'System Restore rolls back system files, drivers, and registry settings to an earlier restore point.'
  },
  {
    id: 222,
    subject: 'windows',
    questionText: 'Which Windows feature installs security patches?',
    options: ['Microsoft Store', 'Windows Update', 'Registry', 'Defender Firewall'],
    correctAnswerIndex: 1,
    explanation: 'Windows Update automatically downloads and applies operating system updates and security patches.'
  },
  {
    id: 223,
    subject: 'windows',
    questionText: 'Windows Defender is primarily a',
    options: ['Database', 'Antivirus/Security solution', 'Browser', 'Hypervisor'],
    correctAnswerIndex: 1,
    explanation: 'Microsoft Defender is a built-in anti-malware and system security suite.'
  },
  {
    id: 224,
    subject: 'windows',
    questionText: 'Which firewall is built into Windows?',
    options: ['Cisco ASA', 'Windows Defender Firewall', 'pfSense', 'iptables'],
    correctAnswerIndex: 1,
    explanation: 'Windows Defender Firewall filters inbound and outbound network traffic.'
  },
  {
    id: 225,
    subject: 'windows',
    questionText: 'UAC stands for',
    options: ['User Access Control', 'User Account Control', 'Universal Access Center', 'Unified Account Console'],
    correctAnswerIndex: 1,
    explanation: 'User Account Control (UAC) prompts users for permission before running elevated tasks.'
  },
  {
    id: 226,
    subject: 'windows',
    questionText: 'Which file extension represents an executable program?',
    options: ['.txt', '.exe', '.docx', '.jpg'],
    correctAnswerIndex: 1,
    explanation: '.exe denotes an executable binary program file in Windows.'
  },
  {
    id: 227,
    subject: 'windows',
    questionText: 'Which command lists running processes?',
    options: ['tasklist', 'process', 'jobs', 'ps'],
    correctAnswerIndex: 0,
    explanation: 'tasklist displays a list of running processes with PIDs and memory usage.'
  },
  {
    id: 228,
    subject: 'windows',
    questionText: 'Which command terminates a process?',
    options: ['taskkill', 'kill', 'stop', 'close'],
    correctAnswerIndex: 0,
    explanation: 'taskkill terminates running processes by PID or process name.'
  },
  {
    id: 229,
    subject: 'windows',
    questionText: 'Which Windows edition is intended for servers?',
    options: ['Windows Home', 'Windows Pro', 'Windows Server', 'Windows Starter'],
    correctAnswerIndex: 2,
    explanation: 'Windows Server is designed for enterprise server roles, Active Directory, and infrastructure services.'
  },
  {
    id: 230,
    subject: 'windows',
    questionText: 'Which protocol is commonly used for Remote Desktop?',
    options: ['SSH', 'RDP', 'FTP', 'HTTP'],
    correctAnswerIndex: 1,
    explanation: 'Remote Desktop Protocol (RDP) allows graphical remote desktop access.'
  },
  {
    id: 231,
    subject: 'windows',
    questionText: 'What is the default port for RDP?',
    options: ['22', '80', '443', '3389'],
    correctAnswerIndex: 3,
    explanation: 'RDP uses TCP/UDP port 3389 by default.'
  },
  {
    id: 232,
    subject: 'windows',
    questionText: 'Which utility monitors system performance in detail?',
    options: ['Performance Monitor', 'Paint', 'Notepad', 'Calculator'],
    correctAnswerIndex: 0,
    explanation: 'Performance Monitor (perfmon.msc) collects granular real-time and historical performance counter logs.'
  },
  {
    id: 233,
    subject: 'windows',
    questionText: 'Which command checks and repairs file system errors?',
    options: ['sfc', 'chkdsk', 'repair', 'diskfix'],
    correctAnswerIndex: 1,
    explanation: 'chkdsk (Check Disk) verifies file system integrity and repairs volume corruption.'
  },
  {
    id: 234,
    subject: 'windows',
    questionText: 'Which command scans and repairs protected system files?',
    options: ['sfc /scannow', 'tasklist', 'ipconfig', 'format'],
    correctAnswerIndex: 0,
    explanation: 'sfc /scannow (System File Checker) scans and replaces damaged Windows system files.'
  },
  {
    id: 235,
    subject: 'windows',
    questionText: 'Which command displays detailed system information?',
    options: ['systeminfo', 'info', 'hostname', 'ver'],
    correctAnswerIndex: 0,
    explanation: 'systeminfo prints comprehensive configuration details (OS version, hotfixes, network adapters).'
  },
  {
    id: 236,
    subject: 'windows',
    questionText: 'Which command displays the computer\'s hostname?',
    options: ['host', 'hostname', 'systeminfo', 'computer'],
    correctAnswerIndex: 1,
    explanation: 'hostname prints the configured computer host name.'
  },
  {
    id: 237,
    subject: 'windows',
    questionText: 'Which Windows feature encrypts an entire drive?',
    options: ['Defender', 'BitLocker', 'Hyper-V', 'NTFS'],
    correctAnswerIndex: 1,
    explanation: 'BitLocker Drive Encryption provides full-volume encryption to protect data.'
  },
  {
    id: 238,
    subject: 'windows',
    questionText: 'Hyper-V is Microsoft\'s',
    options: ['Database', 'Web server', 'Virtualization platform', 'Antivirus'],
    correctAnswerIndex: 2,
    explanation: 'Hyper-V is Microsoft\'s hardware virtualization hypervisor platform.'
  },
  {
    id: 239,
    subject: 'windows',
    questionText: 'Which utility manages local users and groups (Professional editions)?',
    options: ['lusrmgr.msc', 'gpedit.msc', 'regedit', 'eventvwr.msc'],
    correctAnswerIndex: 0,
    explanation: 'lusrmgr.msc opens the Local Users and Groups management console.'
  },
  {
    id: 240,
    subject: 'windows',
    questionText: 'Which command displays all IP configuration details?',
    options: ['ipconfig', 'ipconfig /all', 'ipconfig /flushdns', 'ipconfig /release'],
    correctAnswerIndex: 1,
    explanation: 'ipconfig /all displays detailed network parameters including MAC address, DHCP server, and DNS servers.'
  }
];
