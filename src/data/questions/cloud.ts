import { Question } from '../../types';

export const cloudQuestions: Question[] = [
  {
    id: 101,
    subject: 'cloud',
    questionText: 'Cloud computing provides resources over the',
    options: ['Telephone', 'Internet', 'USB', 'Bluetooth'],
    correctAnswerIndex: 1,
    explanation: 'Cloud computing delivers computing services (servers, storage, databases, networking) over the Internet.'
  },
  {
    id: 102,
    subject: 'cloud',
    questionText: 'Which is NOT a cloud computing benefit?',
    options: ['Scalability', 'High upfront hardware costs', 'Flexibility', 'Rapid deployment'],
    correctAnswerIndex: 1,
    explanation: 'Cloud computing eliminates high upfront hardware capital expenditures (CapEx) in favor of flexible operational costs (OpEx).'
  },
  {
    id: 103,
    subject: 'cloud',
    questionText: 'Which NIST characteristic allows users to provision resources themselves?',
    options: ['Broad Network Access', 'Resource Pooling', 'On-Demand Self-Service', 'Measured Service'],
    correctAnswerIndex: 2,
    explanation: 'On-Demand Self-Service allows consumers to provision computing capabilities automatically without human interaction with service providers.'
  },
  {
    id: 104,
    subject: 'cloud',
    questionText: 'Which characteristic allows access from phones, laptops, and tablets?',
    options: ['Elasticity', 'Broad Network Access', 'Virtualization', 'Automation'],
    correctAnswerIndex: 1,
    explanation: 'Broad Network Access means capabilities are available over the network and accessed through standard client platforms.'
  },
  {
    id: 105,
    subject: 'cloud',
    questionText: 'Resource Pooling means',
    options: ['Each customer has dedicated hardware only', 'Resources are shared securely among customers', 'No virtualization', 'Only private clouds'],
    correctAnswerIndex: 1,
    explanation: 'Resource Pooling combines computing resources to serve multiple consumers using a multi-tenant model.'
  },
  {
    id: 106,
    subject: 'cloud',
    questionText: 'Rapid Elasticity refers to',
    options: ['Automatic scaling', 'Encryption', 'Compression', 'Authentication'],
    correctAnswerIndex: 0,
    explanation: 'Rapid Elasticity allows cloud capabilities to be elastically provisioned and released to scale rapidly with demand.'
  },
  {
    id: 107,
    subject: 'cloud',
    questionText: 'Measured Service means',
    options: ['Unlimited free usage', 'Pay based on usage', 'Monthly fixed hardware', 'Manual billing only'],
    correctAnswerIndex: 1,
    explanation: 'Measured Service automatically controls and optimizes resource use by leveraging a metering capability (pay-as-you-go).'
  },
  {
    id: 108,
    subject: 'cloud',
    questionText: 'Which service model provides virtual machines?',
    options: ['SaaS', 'PaaS', 'IaaS', 'FaaS'],
    correctAnswerIndex: 2,
    explanation: 'Infrastructure as a Service (IaaS) provides raw compute resources like virtual machines, networks, and storage.'
  },
  {
    id: 109,
    subject: 'cloud',
    questionText: 'In PaaS, the customer mainly manages',
    options: ['Physical servers', 'Application code and data', 'Networking hardware', 'Hypervisors'],
    correctAnswerIndex: 1,
    explanation: 'In Platform as a Service (PaaS), the cloud provider manages the OS and runtime environment, while the customer manages code and data.'
  },
  {
    id: 110,
    subject: 'cloud',
    questionText: 'Which service model is Gmail an example of?',
    options: ['IaaS', 'SaaS', 'PaaS', 'FaaS'],
    correctAnswerIndex: 1,
    explanation: 'Software as a Service (SaaS) delivers full end-user applications over the web (e.g. Gmail, Google Drive, Office 365).'
  },
  {
    id: 111,
    subject: 'cloud',
    questionText: 'Serverless computing is also called',
    options: ['SaaS', 'FaaS', 'VPN', 'RAID'],
    correctAnswerIndex: 1,
    explanation: 'Function as a Service (FaaS), such as AWS Lambda or Google Cloud Functions, enables serverless event-driven execution.'
  },
  {
    id: 112,
    subject: 'cloud',
    questionText: 'Which deployment model uses provider-owned infrastructure?',
    options: ['Private Cloud', 'Public Cloud', 'Hybrid Cloud', 'Community Cloud'],
    correctAnswerIndex: 1,
    explanation: 'Public Cloud infrastructure is owned and operated by third-party cloud providers (e.g. GCP, AWS, Azure).'
  },
  {
    id: 113,
    subject: 'cloud',
    questionText: 'Hybrid cloud combines',
    options: ['Linux and Windows', 'Public and Private clouds', 'Two databases', 'SSD and HDD'],
    correctAnswerIndex: 1,
    explanation: 'A hybrid cloud integrates on-premise private infrastructure with public cloud environments.'
  },
  {
    id: 114,
    subject: 'cloud',
    questionText: 'Multi-cloud means',
    options: ['Multiple operating systems', 'Using multiple cloud providers', 'Multiple users', 'Multiple CPUs'],
    correctAnswerIndex: 1,
    explanation: 'Multi-cloud involves deploying workloads across services from two or more distinct cloud vendors.'
  },
  {
    id: 115,
    subject: 'cloud',
    questionText: 'Virtualization allows',
    options: ['Multiple VMs on one physical machine', 'One OS per server only', 'Faster internet', 'RAID'],
    correctAnswerIndex: 0,
    explanation: 'Virtualization abstracts physical hardware to run multiple virtual machines concurrently on a single physical host.'
  },
  {
    id: 116,
    subject: 'cloud',
    questionText: 'A Type 1 Hypervisor runs',
    options: ['On top of Windows', 'Directly on hardware', 'Inside Docker', 'Inside a browser'],
    correctAnswerIndex: 1,
    explanation: 'Type 1 (bare-metal) hypervisors run directly on host hardware without an underlying host OS.'
  },
  {
    id: 117,
    subject: 'cloud',
    questionText: 'Which is a Type 2 Hypervisor?',
    options: ['VMware ESXi', 'Hyper-V Server', 'VirtualBox', 'Xen'],
    correctAnswerIndex: 2,
    explanation: 'Oracle VirtualBox is a Type 2 (hosted) hypervisor that runs as an application inside a host OS.'
  },
  {
    id: 118,
    subject: 'cloud',
    questionText: 'Containers share the host',
    options: ['RAM', 'Kernel', 'BIOS', 'CPU cache'],
    correctAnswerIndex: 1,
    explanation: 'Containers share the host operating system kernel, making them lightweight compared to full virtual machines.'
  },
  {
    id: 119,
    subject: 'cloud',
    questionText: 'Which technology is commonly used for containers?',
    options: ['VMware', 'Docker', 'BIOS', 'RAID'],
    correctAnswerIndex: 1,
    explanation: 'Docker is the leading software platform for building, shipping, and running containerized applications.'
  },
  {
    id: 120,
    subject: 'cloud',
    questionText: 'Kubernetes is mainly used for',
    options: ['Databases', 'Container orchestration', 'RAID management', 'Encryption'],
    correctAnswerIndex: 1,
    explanation: 'Kubernetes (K8s) automates deployment, scaling, networking, and management of containerized applications.'
  },
  {
    id: 121,
    subject: 'cloud',
    questionText: 'Which storage type is ideal for images and backups?',
    options: ['Block', 'Object', 'RAM', 'Cache'],
    correctAnswerIndex: 1,
    explanation: 'Object storage (e.g. AWS S3, Google Cloud Storage) is optimized for unstructured data like media files and backups.'
  },
  {
    id: 122,
    subject: 'cloud',
    questionText: 'Which storage is commonly used for VM disks?',
    options: ['Object', 'Block', 'File only', 'Tape'],
    correctAnswerIndex: 1,
    explanation: 'Block storage provides raw storage volumes suited for database files and VM boot drives.'
  },
  {
    id: 123,
    subject: 'cloud',
    questionText: 'A load balancer',
    options: ['Encrypts data', 'Distributes traffic', 'Creates backups', 'Assigns IP addresses'],
    correctAnswerIndex: 1,
    explanation: 'A load balancer distributes incoming network traffic evenly across multiple backend servers.'
  },
  {
    id: 124,
    subject: 'cloud',
    questionText: 'Auto Scaling primarily',
    options: ['Increases CPU speed', 'Adds/removes resources automatically', 'Creates databases', 'Encrypts storage'],
    correctAnswerIndex: 1,
    explanation: 'Auto Scaling automatically increases or decreases instance counts based on traffic and demand metrics.'
  },
  {
    id: 125,
    subject: 'cloud',
    questionText: 'High Availability focuses on',
    options: ['Reducing downtime', 'Increasing storage only', 'User authentication', 'Logging'],
    correctAnswerIndex: 0,
    explanation: 'High Availability (HA) ensures systems remain operational and reachable with minimal downtime.'
  },
  {
    id: 126,
    subject: 'cloud',
    questionText: 'RPO measures',
    options: ['Maximum downtime', 'Maximum acceptable data loss', 'CPU usage', 'Network speed'],
    correctAnswerIndex: 1,
    explanation: 'Recovery Point Objective (RPO) measures the maximum acceptable data loss expressed in time prior to an outage.'
  },
  {
    id: 127,
    subject: 'cloud',
    questionText: 'RTO measures',
    options: ['Recovery time', 'Password length', 'Storage size', 'CPU frequency'],
    correctAnswerIndex: 0,
    explanation: 'Recovery Time Objective (RTO) measures the maximum acceptable duration of system downtime.'
  },
  {
    id: 128,
    subject: 'cloud',
    questionText: 'Which security model consists of Confidentiality, Integrity, and Availability?',
    options: ['RAID', 'CIA Triad', 'TCP/IP', 'CAP'],
    correctAnswerIndex: 1,
    explanation: 'The CIA Triad stands for Confidentiality, Integrity, and Availability.'
  },
  {
    id: 129,
    subject: 'cloud',
    questionText: 'IAM stands for',
    options: ['Internet Access Management', 'Identity and Access Management', 'Internal Application Manager', 'Identity Authorization Model'],
    correctAnswerIndex: 1,
    explanation: 'Identity and Access Management (IAM) controls user identities and permissions in cloud environments.'
  },
  {
    id: 130,
    subject: 'cloud',
    questionText: 'Authentication answers',
    options: ['What can you do?', 'Who are you?', 'Where are you?', 'What data do you own?'],
    correctAnswerIndex: 1,
    explanation: 'Authentication verifies "Who are you?", whereas Authorization determines "What can you do?".'
  }
];
