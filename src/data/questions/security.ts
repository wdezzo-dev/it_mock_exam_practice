import { Question } from '../../types';

export const securityQuestions: Question[] = [
  {
    id: 271,
    subject: 'security',
    questionText: 'CIA stands for',
    options: ['Confidentiality, Integrity, Availability', 'Control, Identity, Access', 'Central Intelligence Agency', 'Confidential Internet Access'],
    correctAnswerIndex: 0,
    explanation: 'The CIA triad stands for Confidentiality, Integrity, and Availability.'
  },
  {
    id: 272,
    subject: 'security',
    questionText: 'Which attack attempts to trick users into revealing information?',
    options: ['DDoS', 'Phishing', 'Spoofing', 'Sniffing'],
    correctAnswerIndex: 1,
    explanation: 'Phishing uses fraudulent communication designed to deceive victims into handing over sensitive credentials.'
  },
  {
    id: 273,
    subject: 'security',
    questionText: 'Malware includes',
    options: ['Viruses', 'Worms', 'Trojans', 'All of the above'],
    correctAnswerIndex: 3,
    explanation: 'Malware is an umbrella term encompassing viruses, worms, Trojans, ransomware, spyware, and rootkits.'
  },
  {
    id: 274,
    subject: 'security',
    questionText: 'Which malware spreads without user interaction?',
    options: ['Trojan', 'Worm', 'Spyware', 'Adware'],
    correctAnswerIndex: 1,
    explanation: 'A computer worm is self-replicating and propagates across networks automatically without human intervention.'
  },
  {
    id: 275,
    subject: 'security',
    questionText: 'A Trojan is',
    options: ['Self-replicating', 'Disguised as legitimate software', 'A firewall', 'Encryption'],
    correctAnswerIndex: 1,
    explanation: 'A Trojan horse misleads users of its true intent by disguising itself as legitimate code.'
  },
  {
    id: 276,
    subject: 'security',
    questionText: 'Ransomware primarily',
    options: ['Improves performance', 'Encrypts files and demands payment', 'Deletes RAM', 'Compresses files'],
    correctAnswerIndex: 1,
    explanation: 'Ransomware encrypts victim files and demands a payment (ransom) to decrypt them.'
  },
  {
    id: 277,
    subject: 'security',
    questionText: 'Antivirus software helps',
    options: ['Create backups', 'Detect and remove malware', 'Increase RAM', 'Improve CPU speed'],
    correctAnswerIndex: 1,
    explanation: 'Antivirus software scans files to identify, quarantine, and eliminate malware threats.'
  },
  {
    id: 278,
    subject: 'security',
    questionText: 'A firewall primarily',
    options: ['Encrypts disks', 'Filters network traffic', 'Increases storage', 'Installs software'],
    correctAnswerIndex: 1,
    explanation: 'A firewall monitors and controls incoming and outgoing network traffic based on security rules.'
  },
  {
    id: 279,
    subject: 'security',
    questionText: 'MFA stands for',
    options: ['Multiple File Access', 'Multi-Factor Authentication', 'Managed Firewall Access', 'Main Function Authentication'],
    correctAnswerIndex: 1,
    explanation: 'Multi-Factor Authentication requires two or more verification factors to gain access.'
  },
  {
    id: 280,
    subject: 'security',
    questionText: 'Which is NOT an authentication factor?',
    options: ['Something you know', 'Something you have', 'Something you are', 'Something you download'],
    correctAnswerIndex: 3,
    explanation: 'The 3 core factors are: something you know (password), something you have (token/phone), and something you are (biometric).'
  },
  {
    id: 281,
    subject: 'security',
    questionText: 'Which password is strongest?',
    options: ['123456', 'password', 'P@ssword1', 'G7#rL9!xQ2@p'],
    correctAnswerIndex: 3,
    explanation: 'High entropy passwords combining numbers, uppercase/lowercase characters, and special symbols are strongest.'
  },
  {
    id: 282,
    subject: 'security',
    questionText: 'Encryption provides',
    options: ['Compression', 'Confidentiality', 'Availability', 'Routing'],
    correctAnswerIndex: 1,
    explanation: 'Encryption scrambles plaintext into ciphertext to preserve data confidentiality.'
  },
  {
    id: 283,
    subject: 'security',
    questionText: 'HTTPS uses',
    options: ['SSL/TLS', 'FTP', 'ARP', 'ICMP'],
    correctAnswerIndex: 0,
    explanation: 'HTTPS encrypts HTTP web requests using Transport Layer Security (TLS, formerly SSL).'
  },
  {
    id: 284,
    subject: 'security',
    questionText: 'Which protocol securely transfers files?',
    options: ['FTP', 'TFTP', 'SFTP', 'HTTP'],
    correctAnswerIndex: 2,
    explanation: 'SFTP (SSH File Transfer Protocol) provides secure file transfers over an encrypted SSH connection.'
  },
  {
    id: 285,
    subject: 'security',
    questionText: 'Which protocol provides secure remote login?',
    options: ['Telnet', 'SSH', 'FTP', 'SMTP'],
    correctAnswerIndex: 1,
    explanation: 'SSH provides encrypted console session remote management.'
  },
  {
    id: 286,
    subject: 'security',
    questionText: 'VPN stands for',
    options: ['Virtual Private Network', 'Virtual Public Network', 'Verified Private Node', 'Variable Public Network'],
    correctAnswerIndex: 0,
    explanation: 'A Virtual Private Network (VPN) creates an encrypted tunnel across untrusted public networks.'
  },
  {
    id: 287,
    subject: 'security',
    questionText: 'Which attack floods a server with traffic?',
    options: ['SQL Injection', 'DDoS', 'Phishing', 'Brute Force'],
    correctAnswerIndex: 1,
    explanation: 'A Distributed Denial of Service (DDoS) attack overwhelms target servers with excessive malicious traffic.'
  },
  {
    id: 288,
    subject: 'security',
    questionText: 'Brute-force attacks attempt to',
    options: ['Guess passwords repeatedly', 'Delete files', 'Encrypt drives', 'Install updates'],
    correctAnswerIndex: 0,
    explanation: 'Brute-force attacks systematically try every combination of characters to crack passwords.'
  },
  {
    id: 289,
    subject: 'security',
    questionText: 'SQL Injection targets',
    options: ['Databases', 'CPUs', 'RAM', 'Switches'],
    correctAnswerIndex: 0,
    explanation: 'SQL Injection (SQLi) inserts malicious database queries into input fields to manipulate database servers.'
  },
  {
    id: 290,
    subject: 'security',
    questionText: 'Principle of Least Privilege means',
    options: ['Everyone gets administrator rights', 'Users receive only the permissions they need', 'No passwords are required', 'Everyone shares accounts'],
    correctAnswerIndex: 1,
    explanation: 'Principle of Least Privilege states users should be granted minimum access necessary to perform job duties.'
  },
  {
    id: 291,
    subject: 'security',
    questionText: 'Which backup strategy follows the 3-2-1 rule?',
    options: ['3 copies, 2 media types, 1 off-site copy', '3 hard drives only', '2 backups, 1 USB drive', '1 copy, 2 locations'],
    correctAnswerIndex: 0,
    explanation: 'The 3-2-1 rule dictates maintaining 3 total data copies, on 2 distinct media types, with 1 stored off-site.'
  },
  {
    id: 292,
    subject: 'security',
    questionText: 'Social engineering attacks primarily exploit',
    options: ['Hardware', 'Human behavior', 'RAM', 'Routers'],
    correctAnswerIndex: 1,
    explanation: 'Social engineering targets human psychological vulnerabilities and trust.'
  },
  {
    id: 293,
    subject: 'security',
    questionText: 'Which type of hacker is authorized to test security?',
    options: ['Black Hat', 'White Hat', 'Gray Hat', 'Script Kiddie'],
    correctAnswerIndex: 1,
    explanation: 'White Hat (ethical) hackers test system security with explicit authorization.'
  },
  {
    id: 294,
    subject: 'security',
    questionText: 'Which attack intercepts communication between two parties?',
    options: ['DDoS', 'Man-in-the-Middle', 'Worm', 'Trojan'],
    correctAnswerIndex: 1,
    explanation: 'A Man-in-the-Middle (MitM) attack secretly relays and alters communications between two communicating systems.'
  },
  {
    id: 295,
    subject: 'security',
    questionText: 'Digital certificates are primarily used for',
    options: ['Compression', 'Authentication and encryption', 'Storage', 'Routing'],
    correctAnswerIndex: 1,
    explanation: 'Digital certificates verify domain/entity identity and enable asymmetric TLS key exchanges.'
  },
  {
    id: 296,
    subject: 'security',
    questionText: 'Which algorithm type uses the same key for encryption and decryption?',
    options: ['Asymmetric', 'Symmetric', 'Hashing', 'Digital Signature'],
    correctAnswerIndex: 1,
    explanation: 'Symmetric encryption (e.g. AES) uses a single secret key for both encryption and decryption.'
  },
  {
    id: 297,
    subject: 'security',
    questionText: 'Hashing is primarily used for',
    options: ['Reversible encryption', 'Integrity verification', 'Routing', 'Compression'],
    correctAnswerIndex: 1,
    explanation: 'Cryptographic hashing (e.g. SHA-256) generates fixed-length digests to verify data integrity.'
  },
  {
    id: 298,
    subject: 'security',
    questionText: 'Which practice helps prevent phishing attacks?',
    options: ['Click every email link', 'Verify sender identity before responding', 'Disable antivirus', 'Share passwords'],
    correctAnswerIndex: 1,
    explanation: 'Verifying sender domain addresses and links before interacting helps stop phishing scams.'
  },
  {
    id: 299,
    subject: 'security',
    questionText: 'Which security update should generally be applied promptly?',
    options: ['Security patches', 'Wallpaper updates', 'Font packages only', 'Screen savers'],
    correctAnswerIndex: 0,
    explanation: 'Security patches resolve vulnerability flaws before attackers can exploit them.'
  },
  {
    id: 300,
    subject: 'security',
    questionText: 'Which organization commonly defines cybersecurity best practices?',
    options: ['NIST', 'HDMI', 'PCIe', 'SATA'],
    correctAnswerIndex: 0,
    explanation: 'NIST (National Institute of Standards and Technology) publishes widely adopted security frameworks (e.g. NIST CSF).'
  }
];
