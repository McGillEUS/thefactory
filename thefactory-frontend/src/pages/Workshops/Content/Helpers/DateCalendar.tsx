import React from 'react';
import { styled } from '@mui/system';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import dayjs from 'dayjs';

interface DateCalendarProps {
  highlightedDates: string[];
  onDateClick: (date: string) => void;
}

const StyledDatePicker = styled(DatePicker)({
  // Add any custom styles for your date picker here
});

function DateCalendar({ highlightedDates, onDateClick }: DateCalendarProps) {
  const handleDateChange = (date: Date) => {
    // Pass the selected date to the callback function
    onDateClick && onDateClick(date.toISOString());
  };

  return (
    <StyledDatePicker
      renderInput={(params: { inputProps: { onClick: React.MouseEventHandler<HTMLDivElement> | undefined; value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }) => <div onClick={params.inputProps.onClick}>{params.inputProps.value}</div>}
      renderDay={(day: Date , dayInCurrentMonth: any) => {
        // Check if the day is in the list of highlighted dates
        const isHighlighted = highlightedDates.some((date) =>
          dayjs(date).isSame(day, 'day')
        );

        return (
          <div
            onClick={() => handleDateChange(day)}
            style={{
              backgroundColor: isHighlighted ? '#FFD700' : 'transparent',
            }}
          >
            {day.date()}
          </div>
        );
      }}
    />
  );
}

export default DateCalendar;
