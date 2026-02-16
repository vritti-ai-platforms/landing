import {
  Users,
  Contact,
  Package,
  Building2,
  Calendar,
  Headphones,
} from 'lucide-react';
import { Typography } from '@vritti/quantum-ui/Typography';

const iconMap = {
  Users,
  Contact,
  Package,
  Building2,
  Calendar,
  Headphones,
} as const;

interface ModuleCardProps {
  icon: keyof typeof iconMap;
  title: string;
  suite: string;
  bgColor: string;
  borderColor: string;
}

export function ModuleCard({
  icon,
  title,
  suite,
  bgColor,
  borderColor,
}: ModuleCardProps) {
  const Icon = iconMap[icon];
  return (
    <div className={`rounded-2xl border-2 p-6 flex flex-col gap-4 ${bgColor} ${borderColor}`}>
      <div className="w-14 h-14 rounded-2xl bg-background shadow-sm flex items-center justify-center">
        <Icon size={28} className="text-foreground" />
      </div>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="caption" className="text-vritti-secondary">{suite}</Typography>
    </div>
  );
}
