
 export default function time(date: string | Date)  {
    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  
    const intervals = {
      year: 365 * 24 * 60 * 60,
      month: 30 * 24 * 60 * 60,
      week: 7 * 24 * 60 * 60,
      day: 24 * 60 * 60,
      hour: 60 * 60,
      minute: 60,
      second: 1,
    };
  
    for (const key in intervals) {
      const interval = intervals[key as keyof typeof intervals];
      const count = Math.floor(diffInSeconds / interval);
  
      if (count > 0) {
        return count === 1 ? `1 ${key} ago` : `${count} ${key}s ago`;
      }
    }
  
    return 'just now'; 
  };
  
  