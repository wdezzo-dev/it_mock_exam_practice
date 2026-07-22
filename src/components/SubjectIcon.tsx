import React from 'react';
import { 
  Code, 
  Network, 
  Cloud, 
  Database, 
  Terminal, 
  Monitor, 
  Cpu, 
  ShieldAlert, 
  HardDrive, 
  Layers 
} from 'lucide-react';

interface SubjectIconProps {
  iconName: string;
  className?: string;
}

export const SubjectIcon: React.FC<SubjectIconProps> = ({ iconName, className = "w-5 h-5" }) => {
  switch (iconName) {
    case 'Code':
      return <Code className={className} />;
    case 'Network':
      return <Network className={className} />;
    case 'Cloud':
      return <Cloud className={className} />;
    case 'Database':
      return <Database className={className} />;
    case 'Terminal':
      return <Terminal className={className} />;
    case 'Monitor':
      return <Monitor className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    case 'HardDrive':
      return <HardDrive className={className} />;
    case 'Layers':
    default:
      return <Layers className={className} />;
  }
};
