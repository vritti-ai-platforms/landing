import {
  Users,
  CalendarCheck,
  Package,
  IndianRupee,
} from 'lucide-react';
import { Card, CardContent } from '@vritti/quantum-ui/Card';
import { Typography } from '@vritti/quantum-ui/Typography';

const iconMap = {
  Users,
  CalendarCheck,
  Package,
  IndianRupee,
} as const;

interface StatCardProps {
  icon: keyof typeof iconMap;
  label: string;
  value: string;
  change: string;
  positive: boolean;
  bgColor: string;
  iconColor: string;
}

export function StatCard({
  icon,
  label,
  value,
  change,
  positive,
  bgColor,
  iconColor,
}: StatCardProps) {
  const Icon = iconMap[icon];
  return (
    <Card className="rounded-2xl shadow-sm border-vritti">
      <CardContent className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-xl ${bgColor}`}
          >
            <Icon size={16} className={iconColor} />
          </div>
          <Typography
            variant="caption"
            className={`font-medium ${positive ? 'text-green-600' : 'text-red-500'}`}
          >
            {change}
          </Typography>
        </div>
        <Typography variant="h3" className="text-2xl">
          {value}
        </Typography>
        <Typography variant="caption" className="text-vritti-secondary">
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
}
