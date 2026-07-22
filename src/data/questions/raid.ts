import { Question } from '../../types';

export const raidQuestions: Question[] = [
  {
    id: 301,
    subject: 'raid',
    questionText: 'RAID stands for',
    options: ['Redundant Array of Independent Disks', 'Random Access Integrated Disk', 'Redundant Access Internal Drive', 'Rapid Array Integrated Disk'],
    correctAnswerIndex: 0,
    explanation: 'RAID stands for Redundant Array of Independent Disks.'
  },
  {
    id: 302,
    subject: 'raid',
    questionText: 'RAID 0 provides',
    options: ['Mirroring', 'Striping only', 'Parity', 'Backup'],
    correctAnswerIndex: 1,
    explanation: 'RAID 0 provides disk striping for speed, but zero fault tolerance or redundancy.'
  },
  {
    id: 303,
    subject: 'raid',
    questionText: 'RAID 0 minimum disks required',
    options: ['1', '2', '3', '4'],
    correctAnswerIndex: 1,
    explanation: 'RAID 0 requires at least 2 physical disks.'
  },
  {
    id: 304,
    subject: 'raid',
    questionText: 'RAID 1 provides',
    options: ['Striping', 'Mirroring', 'Parity', 'Compression'],
    correctAnswerIndex: 1,
    explanation: 'RAID 1 mirrors identical data across drives for fault tolerance.'
  },
  {
    id: 305,
    subject: 'raid',
    questionText: 'RAID 1 minimum disks required',
    options: ['1', '2', '3', '4'],
    correctAnswerIndex: 1,
    explanation: 'RAID 1 requires a minimum of 2 physical disks.'
  },
  {
    id: 306,
    subject: 'raid',
    questionText: 'RAID 5 uses',
    options: ['Striping with distributed parity', 'Mirroring only', 'Striping only', 'No redundancy'],
    correctAnswerIndex: 0,
    explanation: 'RAID 5 combines block-level striping with distributed parity across all array disks.'
  },
  {
    id: 307,
    subject: 'raid',
    questionText: 'RAID 5 minimum disks required',
    options: ['2', '3', '4', '5'],
    correctAnswerIndex: 1,
    explanation: 'RAID 5 requires a minimum of 3 physical disks.'
  },
  {
    id: 308,
    subject: 'raid',
    questionText: 'RAID 5 can survive the failure of',
    options: ['No disks', 'One disk', 'Two disks', 'Three disks'],
    correctAnswerIndex: 1,
    explanation: 'RAID 5 can tolerate the simultaneous failure of 1 drive without data loss.'
  },
  {
    id: 309,
    subject: 'raid',
    questionText: 'RAID 6 uses',
    options: ['Single parity', 'Double distributed parity', 'Mirroring only', 'Striping only'],
    correctAnswerIndex: 1,
    explanation: 'RAID 6 extends RAID 5 by adding a second distributed parity block per write stripe.'
  },
  {
    id: 310,
    subject: 'raid',
    questionText: 'RAID 6 minimum disks required',
    options: ['2', '3', '4', '5'],
    correctAnswerIndex: 2,
    explanation: 'RAID 6 requires a minimum of 4 physical disks.'
  },
  {
    id: 311,
    subject: 'raid',
    questionText: 'RAID 6 can tolerate failure of',
    options: ['One disk', 'Two disks', 'Three disks', 'Four disks'],
    correctAnswerIndex: 1,
    explanation: 'RAID 6 double parity protects against 2 concurrent drive failures.'
  },
  {
    id: 312,
    subject: 'raid',
    questionText: 'RAID 10 is',
    options: ['RAID 0 + RAID 1', 'RAID 1 + RAID 5', 'RAID 5 + RAID 6', 'RAID 0 + RAID 6'],
    correctAnswerIndex: 0,
    explanation: 'RAID 10 (or RAID 1+0) combines disk mirroring (RAID 1) and disk striping (RAID 0).'
  },
  {
    id: 313,
    subject: 'raid',
    questionText: 'RAID 10 minimum disks required',
    options: ['2', '3', '4', '6'],
    correctAnswerIndex: 2,
    explanation: 'RAID 10 requires at least 4 physical drives (two mirrored sets striped together).'
  },
  {
    id: 314,
    subject: 'raid',
    questionText: 'Which RAID level generally offers the highest performance but no fault tolerance?',
    options: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 10'],
    correctAnswerIndex: 0,
    explanation: 'RAID 0 offers raw read/write throughput without parity overhead, but has zero fault tolerance.'
  },
  {
    id: 315,
    subject: 'raid',
    questionText: 'Which RAID level stores identical copies of data?',
    options: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 6'],
    correctAnswerIndex: 1,
    explanation: 'RAID 1 duplicates (mirrors) exact identical data onto paired drives.'
  },
  {
    id: 316,
    subject: 'raid',
    questionText: 'Which RAID level is commonly chosen for a balance of performance, storage efficiency, and fault tolerance?',
    options: ['RAID 0', 'RAID 1', 'RAID 5', 'JBOD'],
    correctAnswerIndex: 2,
    explanation: 'RAID 5 strikes an effective balance between usable storage capacity, performance, and drive failure protection.'
  },
  {
    id: 317,
    subject: 'raid',
    questionText: 'Which protocol translates domain names into IP addresses?',
    options: ['DHCP', 'DNS', 'ARP', 'ICMP'],
    correctAnswerIndex: 1,
    explanation: 'DNS translates human-readable hostnames into network IP addresses.'
  },
  {
    id: 318,
    subject: 'raid',
    questionText: 'Which SQL statement retrieves records from a table?',
    options: ['UPDATE', 'INSERT', 'SELECT', 'DELETE'],
    correctAnswerIndex: 2,
    explanation: 'SELECT queries and fetches data rows from database tables.'
  },
  {
    id: 319,
    subject: 'raid',
    questionText: 'Which Linux command displays the current working directory?',
    options: ['ls', 'cd', 'pwd', 'mkdir'],
    correctAnswerIndex: 2,
    explanation: 'pwd prints the present working directory path in Linux.'
  },
  {
    id: 320,
    subject: 'raid',
    questionText: 'Which cloud service model provides complete software applications over the Internet?',
    options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'],
    correctAnswerIndex: 2,
    explanation: 'SaaS (Software as a Service) delivers ready-to-use software applications over the web.'
  }
];
