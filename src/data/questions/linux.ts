import { Question } from '../../types';

export const linuxQuestions: Question[] = [
  {
    id: 161,
    subject: 'linux',
    questionText: 'Linux is primarily',
    options: ['A web browser', 'An operating system', 'A database', 'A programming language'],
    correctAnswerIndex: 1,
    explanation: 'Linux is an open-source Unix-like operating system kernel and family of OS distributions.'
  },
  {
    id: 162,
    subject: 'linux',
    questionText: 'Which command displays the current working directory?',
    options: ['cd', 'pwd', 'ls', 'dir'],
    correctAnswerIndex: 1,
    explanation: 'pwd (Print Working Directory) displays the absolute path of the current directory.'
  },
  {
    id: 163,
    subject: 'linux',
    questionText: 'Which command lists files and directories?',
    options: ['ls', 'pwd', 'cat', 'cp'],
    correctAnswerIndex: 0,
    explanation: 'ls lists contents of the current or specified directory.'
  },
  {
    id: 164,
    subject: 'linux',
    questionText: 'Which command changes directories?',
    options: ['pwd', 'mv', 'cd', 'mkdir'],
    correctAnswerIndex: 2,
    explanation: 'cd (Change Directory) navigates between filesystem directories.'
  },
  {
    id: 165,
    subject: 'linux',
    questionText: 'Which command creates a new directory?',
    options: ['touch', 'mkdir', 'md', 'dir'],
    correctAnswerIndex: 1,
    explanation: 'mkdir (Make Directory) creates a new directory.'
  },
  {
    id: 166,
    subject: 'linux',
    questionText: 'Which command creates an empty file?',
    options: ['touch', 'mkfile', 'file', 'new'],
    correctAnswerIndex: 0,
    explanation: 'touch creates an empty file if it doesn\'t exist or updates its timestamp.'
  },
  {
    id: 167,
    subject: 'linux',
    questionText: 'Which command copies files?',
    options: ['mv', 'cp', 'rm', 'cat'],
    correctAnswerIndex: 1,
    explanation: 'cp copies files and directories.'
  },
  {
    id: 168,
    subject: 'linux',
    questionText: 'Which command moves or renames files?',
    options: ['cp', 'mv', 'renamefile', 'cut'],
    correctAnswerIndex: 1,
    explanation: 'mv moves or renames files and directories.'
  },
  {
    id: 169,
    subject: 'linux',
    questionText: 'Which command deletes files?',
    options: ['del', 'erase', 'rm', 'delete'],
    correctAnswerIndex: 2,
    explanation: 'rm removes (deletes) files.'
  },
  {
    id: 170,
    subject: 'linux',
    questionText: 'Which command removes an empty directory?',
    options: ['rmdir', 'removedir', 'rm', 'erase'],
    correctAnswerIndex: 0,
    explanation: 'rmdir removes empty directories.'
  },
  {
    id: 171,
    subject: 'linux',
    questionText: 'Which command displays the contents of a file?',
    options: ['cat', 'open', 'show', 'read'],
    correctAnswerIndex: 0,
    explanation: 'cat (concatenate) prints the contents of text files to standard output.'
  },
  {
    id: 172,
    subject: 'linux',
    questionText: 'Which command shows the first 10 lines of a file by default?',
    options: ['tail', 'head', 'first', 'cat'],
    correctAnswerIndex: 1,
    explanation: 'head prints the first 10 lines of a file by default.'
  },
  {
    id: 173,
    subject: 'linux',
    questionText: 'Which command shows the last 10 lines of a file?',
    options: ['head', 'tail', 'end', 'less'],
    correctAnswerIndex: 1,
    explanation: 'tail prints the last 10 lines of a file by default.'
  },
  {
    id: 174,
    subject: 'linux',
    questionText: 'Which command searches for text in files?',
    options: ['grep', 'find', 'locate', 'scan'],
    correctAnswerIndex: 0,
    explanation: 'grep searches text patterns inside files.'
  },
  {
    id: 175,
    subject: 'linux',
    questionText: 'Which command searches for files by name?',
    options: ['grep', 'find', 'cat', 'pwd'],
    correctAnswerIndex: 1,
    explanation: 'find searches directory trees for matching file names and attributes.'
  },
  {
    id: 176,
    subject: 'linux',
    questionText: 'Which command displays the current user?',
    options: ['who', 'whoami', 'users', 'iduser'],
    correctAnswerIndex: 1,
    explanation: 'whoami displays the effective username currently active.'
  },
  {
    id: 177,
    subject: 'linux',
    questionText: 'Which command displays the current date and time?',
    options: ['clock', 'time', 'date', 'now'],
    correctAnswerIndex: 2,
    explanation: 'date displays or sets the system date and time.'
  },
  {
    id: 178,
    subject: 'linux',
    questionText: 'Which command clears the terminal screen?',
    options: ['clean', 'cls', 'clear', 'erase'],
    correctAnswerIndex: 2,
    explanation: 'clear clears the terminal screen.'
  },
  {
    id: 179,
    subject: 'linux',
    questionText: 'Which command shows running processes?',
    options: ['ps', 'proc', 'run', 'jobs'],
    correctAnswerIndex: 0,
    explanation: 'ps displays a snapshot of current running processes.'
  },
  {
    id: 180,
    subject: 'linux',
    questionText: 'Which command provides a real-time process monitor?',
    options: ['proc', 'top', 'monitor', 'status'],
    correctAnswerIndex: 1,
    explanation: 'top (or htop) displays real-time system processes and CPU/RAM metrics.'
  },
  {
    id: 181,
    subject: 'linux',
    questionText: 'Which command terminates a process by PID?',
    options: ['end', 'kill', 'stop', 'terminate'],
    correctAnswerIndex: 1,
    explanation: 'kill sends signals to terminate processes using their PID.'
  },
  {
    id: 182,
    subject: 'linux',
    questionText: 'Which command displays disk usage of a filesystem?',
    options: ['df', 'du', 'disk', 'fs'],
    correctAnswerIndex: 0,
    explanation: 'df (Disk Free) shows available and used space on mounted filesystems.'
  },
  {
    id: 183,
    subject: 'linux',
    questionText: 'Which command displays file or directory size?',
    options: ['df', 'du', 'size', 'ls'],
    correctAnswerIndex: 1,
    explanation: 'du (Disk Usage) estimates directory and file space usage.'
  },
  {
    id: 184,
    subject: 'linux',
    questionText: 'Which command changes file permissions?',
    options: ['chmod', 'chown', 'permit', 'attrib'],
    correctAnswerIndex: 0,
    explanation: 'chmod (Change Mode) modifies file access permissions (read, write, execute).'
  },
  {
    id: 185,
    subject: 'linux',
    questionText: 'Which command changes file ownership?',
    options: ['chmod', 'chgrp', 'chown', 'owner'],
    correctAnswerIndex: 2,
    explanation: 'chown (Change Owner) changes user and group ownership of files.'
  },
  {
    id: 186,
    subject: 'linux',
    questionText: 'Which command changes the group ownership?',
    options: ['chown', 'chmod', 'chgrp', 'group'],
    correctAnswerIndex: 2,
    explanation: 'chgrp changes the group ownership of files.'
  },
  {
    id: 187,
    subject: 'linux',
    questionText: 'Which command switches to the root user?',
    options: ['admin', 'su', 'sudo', 'login'],
    correctAnswerIndex: 1,
    explanation: 'su (Substitute User) switches shell identity, usually to root.'
  },
  {
    id: 188,
    subject: 'linux',
    questionText: 'What does sudo allow?',
    options: ['Deletes files permanently', 'Executes commands with elevated privileges', 'Starts networking', 'Changes directories'],
    correctAnswerIndex: 1,
    explanation: 'sudo allows permitted users to execute commands with root/administrative privileges.'
  },
  {
    id: 189,
    subject: 'linux',
    questionText: 'Which directory contains user home folders?',
    options: ['/etc', '/usr', '/home', '/var'],
    correctAnswerIndex: 2,
    explanation: '/home contains personal files and directories for regular users.'
  },
  {
    id: 190,
    subject: 'linux',
    questionText: 'Which directory contains system configuration files?',
    options: ['/etc', '/tmp', '/dev', '/boot'],
    correctAnswerIndex: 0,
    explanation: '/etc stores system-wide configuration files.'
  },
  {
    id: 191,
    subject: 'linux',
    questionText: 'Which directory contains bootloader and kernel files?',
    options: ['/home', '/boot', '/etc', '/usr'],
    correctAnswerIndex: 1,
    explanation: '/boot contains kernel images, initramfs, and bootloader configuration.'
  },
  {
    id: 192,
    subject: 'linux',
    questionText: 'Which directory stores temporary files?',
    options: ['/var', '/tmp', '/bin', '/opt'],
    correctAnswerIndex: 1,
    explanation: '/tmp holds temporary files created by system processes and applications.'
  },
  {
    id: 193,
    subject: 'linux',
    questionText: 'Which directory contains essential user commands?',
    options: ['/bin', '/tmp', '/srv', '/media'],
    correctAnswerIndex: 0,
    explanation: '/bin contains essential command binaries (e.g. ls, cp, cat).'
  },
  {
    id: 194,
    subject: 'linux',
    questionText: 'Which command displays network configuration (traditional)?',
    options: ['ifconfig', 'ping', 'ssh', 'route'],
    correctAnswerIndex: 0,
    explanation: 'ifconfig displays network interface addresses and configuration.'
  },
  {
    id: 195,
    subject: 'linux',
    questionText: 'Which command tests network connectivity?',
    options: ['ping', 'grep', 'chmod', 'top'],
    correctAnswerIndex: 0,
    explanation: 'ping sends ICMP Echo requests to test connectivity to host computers.'
  },
  {
    id: 196,
    subject: 'linux',
    questionText: 'Which command securely connects to a remote Linux system?',
    options: ['Telnet', 'FTP', 'SSH', 'HTTP'],
    correctAnswerIndex: 2,
    explanation: 'SSH (Secure Shell) provides encrypted remote command line connections.'
  },
  {
    id: 197,
    subject: 'linux',
    questionText: 'Which package manager is commonly used on Ubuntu?',
    options: ['yum', 'apt', 'dnf', 'zypper'],
    correctAnswerIndex: 1,
    explanation: 'APT (Advanced Package Tool) is the default package management utility on Debian and Ubuntu.'
  },
  {
    id: 198,
    subject: 'linux',
    questionText: 'Which command updates package lists on Debian/Ubuntu?',
    options: ['apt install', 'apt update', 'apt remove', 'apt search'],
    correctAnswerIndex: 1,
    explanation: 'apt update fetches the latest package lists from repositories.'
  },
  {
    id: 199,
    subject: 'linux',
    questionText: 'Which command installs a package on Ubuntu?',
    options: ['apt install', 'apt update', 'apt remove', 'apt clean'],
    correctAnswerIndex: 0,
    explanation: 'apt install <package_name> installs software on Ubuntu.'
  },
  {
    id: 200,
    subject: 'linux',
    questionText: 'Linux file permissions are represented by',
    options: ['Read, Write, Execute', 'Copy, Move, Delete', 'Share, Hide, Lock', 'Open, Close, Save'],
    correctAnswerIndex: 0,
    explanation: 'Linux permissions consist of r (read), w (write), and x (execute).'
  }
];
