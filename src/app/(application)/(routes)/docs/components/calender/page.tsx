'use client';

import { Calendar, DatePicker } from '@/registry/components/calender/Calender';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';
import { useState } from 'react';

// ─── Demo Data ───────────────────────────────────────────────────────────

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM',
];

const presets = [
  { label: 'Today', value: new Date() },
  {
    label: 'This Week',
    value: {
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 6)),
    },
  },
  {
    label: 'Next Week',
    value: {
      from: new Date(new Date().setDate(new Date().getDate() + 7)),
      to: new Date(new Date().setDate(new Date().getDate() + 13)),
    },
  },
  {
    label: 'End of Month',
    value: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
  },
];

const isDateDisabled = (date: Date) => {
  const day = date.getDay();
  if (day === 0 || day === 6) return true;
  return false;
};

// ─── Calendar Data ───────────────────────────────────────────────────────

const calendarData = {
  name: 'Calendar',
  slug: 'calendar',
  title: 'Calendar',
  description:
    'A versatile calendar and date picker component with support for single, range, and multiple selection, time slots, presets, disabled dates, month/year dropdowns, and multiple sizes and themes.',
  category: 'Inputs',
  installation: {
    command: 'shadcn@latest add aphelio/c/calendar',
  },
  usage: {
    import: "import { Calendar, DatePicker } from '@/components/ui/calendar'",
    basic: `const [date, setDate] = useState<Date | null>(null);

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  theme="dark"
  variant="bordered"
/>`,
  },
  sections: [
    {
      id: 'modes',
      title: 'Selection Modes',
      description: 'Single date, date range, or multiple dates selection.',
      examples: [
        {
          label: 'Single Select',
          code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  theme="dark"
  variant="bordered"
/>`,
          preview: <SingleCalendarPreview />,
        },
        {
          label: 'Range Select',
          code: `<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
  theme="dark"
  variant="bordered"
  presets={presets}
/>`,
          preview: <RangeCalendarPreview />,
        },
        {
          label: 'Multiple Select',
          code: `<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
  theme="dark"
  variant="bordered"
/>`,
          preview: <MultipleCalendarPreview />,
        },
      ],
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Three predefined sizes for different contexts.',
      examples: [
        {
          label: 'Small',
          code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  theme="dark"
  variant="bordered"
  size="sm"
/>`,
          preview: (
            <CalendarWrapper>
              <Calendar mode="single" theme="dark" variant="bordered" size="sm" />
            </CalendarWrapper>
          ),
        },
        {
          label: 'Medium (Default)',
          code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  theme="dark"
  variant="bordered"
  size="md"
/>`,
          preview: (
            <CalendarWrapper>
              <Calendar mode="single" theme="dark" variant="bordered" size="md" />
            </CalendarWrapper>
          ),
        },
        {
          label: 'Large',
          code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  theme="dark"
  variant="bordered"
  size="lg"
/>`,
          preview: (
            <CalendarWrapper>
              <Calendar mode="single" theme="dark" variant="bordered" size="lg" />
            </CalendarWrapper>
          ),
        },
      ],
    },
    {
      id: 'variants',
      title: 'Variants',
      description: 'Bordered and card visual styles.',
      examples: [
        {
          label: 'Bordered (Default)',
          code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  theme="dark"
  variant="bordered"
/>`,
          preview: (
            <CalendarWrapper>
              <Calendar mode="single" theme="dark" variant="bordered" />
            </CalendarWrapper>
          ),
        },
        {
          label: 'Card',
          code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  theme="dark"
  variant="card"
/>`,
          preview: (
            <CalendarWrapper>
              <Calendar mode="single" theme="dark" variant="card" />
            </CalendarWrapper>
          ),
        },
      ],
    },
    {
      id: 'themes',
      title: 'Themes',
      description: 'Light and dark themes for different backgrounds.',
      examples: [
        {
          label: 'Dark Theme (Default)',
          code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  theme="dark"
  variant="bordered"
/>`,
          preview: (
            <CalendarWrapper >
              <Calendar mode="single"  theme="dark" variant="bordered" />
            </CalendarWrapper>
          ),
        },
        {
          label: 'Light Theme',
          code: `<div className="rounded-xl z-10 bg-white p-6">
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    theme="dark"
    variant="bordered"
  />
</div>`,
          preview: (
            <div className="rounded-xl bg-white p-6">
              <Calendar mode="single" theme="light" className='' variant="bordered" />
            </div>
          ),
        },
      ],
    },
    {
      id: 'time-slots',
      title: 'Time Slots',
      description: 'Add selectable time slots alongside the calendar.',
      examples: [
        {
          label: 'With Time Slots',
          code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  theme="dark"
  variant="bordered"
  timeSlots={timeSlots}
  selectedTime={selectedTime}
  onTimeSelect={setSelectedTime}
  size="lg"
/>`,
          preview: <TimeSlotCalendarPreview />,
        },
      ],
    },
    {
      id: 'presets',
      title: 'Presets',
      description: 'Quick-select preset date ranges.',
      examples: [
        {
          label: 'With Presets',
          code: `<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
  theme="dark"
  variant="bordered"
  presets={[
    { label: 'Today', value: new Date() },
    { label: 'This Week', value: { from: new Date(), to: new Date(Date.now() + 6 * 86400000) } },
    { label: 'Next Week', value: { from: new Date(Date.now() + 7 * 86400000), to: new Date(Date.now() + 13 * 86400000) } },
  ]}
/>`,
          preview: <PresetCalendarPreview />,
        },
      ],
    },
    {
      id: 'disabled-dates',
      title: 'Disabled Dates',
      description: 'Disable specific dates or date ranges.',
      examples: [
        {
          label: 'Weekends Disabled',
          code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  theme="dark"
  variant="bordered"
  disabled={(date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // weekends
  }}
/>`,
          preview: (
            <CalendarWrapper>
              <Calendar mode="single" theme="dark" variant="bordered" disabled={isDateDisabled} />
            </CalendarWrapper>
          ),
        },
      ],
    },
    {
      id: 'month-year-select',
      title: 'Month/Year Select',
      description: 'Dropdown selectors for quick month and year navigation.',
      examples: [
        {
          label: 'With Dropdowns',
          code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  theme="dark"
  variant="bordered"
  showMonthYearSelect
/>`,
          preview: (
            <CalendarWrapper>
              <Calendar mode="single" theme="dark" variant="bordered" showMonthYearSelect />
            </CalendarWrapper>
          ),
        },
      ],
    },
    {
      id: 'date-picker',
      title: 'Date Picker',
      description: 'Dropdown input variant for form usage.',
      examples: [
        {
          label: 'Basic Date Picker',
          code: `<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Select a date..."
  theme="dark"
  variant="bordered"
/>`,
          preview: <DatePickerPreview />,
        },
        {
          label: 'With Presets',
          code: `<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Pick a date..."
  theme="dark"
  variant="bordered"
  presets={[
    { label: 'Today', value: new Date() },
    { label: 'Tomorrow', value: new Date(Date.now() + 86400000) },
  ]}
/>`,
          preview: <DatePickerWithPresetsPreview />,
        },
        {
          label: 'Light Theme',
          code: `<div className="rounded-xl bg-white p-6">
  <DatePicker
    value={date}
    onChange={setDate}
    placeholder="Pick a date..."
    theme="light"
    variant="bordered"
  />
</div>`,
          preview: (
            <div className="rounded-xl bg-white p-6">
              <DatePickerPreview theme="light" />
            </div>
          ),
        },
      ],
    },
  ],
  props: [
    {
      name: 'mode',
      type: "'single' | 'range' | 'multiple'",
      default: '"single"',
      description: 'Selection mode for the calendar.',
    },
    {
      name: 'selected',
      type: 'Date | Date[] | { from: Date; to: Date } | null',
      default: 'null',
      description: 'Currently selected date(s).',
    },
    {
      name: 'onSelect',
      type: '(date: Date | Date[] | { from: Date; to: Date } | null) => void',
      default: 'undefined',
      description: 'Callback fired when selection changes.',
    },
    {
      name: 'disabled',
      type: 'Date[] | ((date: Date) => boolean)',
      default: 'undefined',
      description: 'Disabled dates or function to determine disabled dates.',
    },
    {
      name: 'showOutsideDays',
      type: 'boolean',
      default: 'true',
      description: 'Show days from previous/next months.',
    },
    {
      name: 'showWeekNumbers',
      type: 'boolean',
      default: 'false',
      description: 'Display week numbers in the calendar.',
    },
    {
      name: 'navPosition',
      type: "'top' | 'right'",
      default: '"top"',
      description: 'Position of the navigation arrows.',
    },
    {
      name: 'showMonthYearSelect',
      type: 'boolean',
      default: 'false',
      description: 'Show month and year dropdown selectors.',
    },
    {
      name: 'presets',
      type: '{ label: string; value: Date | { from: Date; to: Date } }[]',
      default: 'undefined',
      description: 'Preset date options for quick selection.',
    },
    {
      name: 'timeSlots',
      type: 'string[]',
      default: 'undefined',
      description: 'Available time slots to display alongside the calendar.',
    },
    {
      name: 'onTimeSelect',
      type: '(time: string) => void',
      default: 'undefined',
      description: 'Callback fired when a time slot is selected.',
    },
    {
      name: 'selectedTime',
      type: 'string',
      default: 'undefined',
      description: 'Currently selected time slot.',
    },
    {
      name: 'minDate',
      type: 'Date',
      default: 'undefined',
      description: 'Minimum selectable date.',
    },
    {
      name: 'maxDate',
      type: 'Date',
      default: 'undefined',
      description: 'Maximum selectable date.',
    },
    {
      name: 'theme',
      type: "'dark' | 'light'",
      default: '"dark"',
      description: 'Color theme of the calendar.',
    },
    {
      name: 'variant',
      type: "'default' | 'bordered' | 'card'",
      default: '"bordered"',
      description: 'Visual variant of the calendar.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: '"md"',
      description: 'Size of the calendar cells.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the calendar container.',
    },
  ],
  datePickerProps: [
    {
      name: 'value',
      type: 'Date | null',
      default: 'null',
      description: 'Currently selected date.',
    },
    {
      name: 'onChange',
      type: '(date: Date | null) => void',
      default: 'undefined',
      description: 'Callback fired when date changes.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: '"Pick a date"',
      description: 'Placeholder text for the input.',
    },
    {
      name: 'theme',
      type: "'dark' | 'light'",
      default: '"dark"',
      description: 'Color theme of the date picker.',
    },
    {
      name: 'variant',
      type: "'default' | 'bordered' | 'card'",
      default: '"bordered"',
      description: 'Visual variant passed to the calendar.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the input.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Combobox',
    href: '/docs/components/combobox',
    description: 'Dropdown with search, multi-select, and creatable options.',
  },
  {
    label: 'Table',
    href: '/docs/components/table',
    description: 'Data table with sorting, selection, and filtering.',
  },
];

// ─── Wrapper for Calendar Previews ─────────────────────────────────────────

function CalendarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[12px] bg-[#0D0D0D] border border-white/[0.06] p-4 inline-block">
      {children}
    </div>
  );
}

// ─── Preview Components ────────────────────────────────────────────────────

function SingleCalendarPreview() {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <div className="space-y-4">
      <CalendarWrapper>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => setDate(d as Date)}
          theme="dark"
          variant="bordered"
        />
      </CalendarWrapper>
      <div className="text-sm text-white/40">
        Selected: <span className="text-white/70">{date ? date.toDateString() : 'None'}</span>
      </div>
    </div>
  );
}

function RangeCalendarPreview() {
  const [range, setRange] = useState<{ from: Date; to: Date } | null>(null);
  return (
    <div className="space-y-4">
      <CalendarWrapper>
        <Calendar
          mode="range"
          selected={range}
          onSelect={(d) => setRange(d as { from: Date; to: Date })}
          theme="dark"
          variant="bordered"
          presets={presets}
        />
      </CalendarWrapper>
      <div className="text-sm text-white/40 space-y-1">
        <p>From: <span className="text-white/70">{range?.from ? range.from.toDateString() : 'None'}</span></p>
        <p>To: <span className="text-white/70">{range?.to ? range.to.toDateString() : 'None'}</span></p>
      </div>
    </div>
  );
}

function MultipleCalendarPreview() {
  const [dates, setDates] = useState<Date[]>([]);
  return (
    <div className="space-y-4">
      <CalendarWrapper>
        <Calendar
          mode="multiple"
          selected={dates}
          onSelect={(d) => setDates(d as Date[])}
          theme="dark"
          variant="bordered"
        />
      </CalendarWrapper>
      <div className="text-sm text-white/40">
        Selected ({dates.length}):{' '}
        <span className="text-white/70">
          {dates.length ? dates.map((d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })).join(', ') : 'None'}
        </span>
      </div>
    </div>
  );
}

function TimeSlotCalendarPreview() {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState('');
  return (
    <div className="space-y-4">
      <CalendarWrapper>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => setDate(d as Date)}
          theme="dark"
          variant="bordered"
          timeSlots={timeSlots}
          selectedTime={time}
          onTimeSelect={setTime}
          size="lg"
        />
      </CalendarWrapper>
      <div className="text-sm text-white/40 space-y-1">
        <p>Date: <span className="text-white/70">{date ? date.toDateString() : 'None'}</span></p>
        <p>Time: <span className="text-white/70">{time || 'None'}</span></p>
      </div>
    </div>
  );
}

function PresetCalendarPreview() {
  const [range, setRange] = useState<{ from: Date; to: Date } | null>(null);
  return (
    <div className="">
      <CalendarWrapper>
        <Calendar
          mode="range"
          selected={range}
          onSelect={(d) => setRange(d as { from: Date; to: Date })}
          theme="dark"
          variant="bordered"
          presets={presets}
        />
      </CalendarWrapper>
      <div className="text-sm text-white/40 space-y-1">
        <p>From: <span className="text-white/70">{range?.from ? range.from.toDateString() : 'None'}</span></p>
        <p>To: <span className="text-white/70">{range?.to ? range.to.toDateString() : 'None'}</span></p>
      </div>
    </div>
  );
}

function DatePickerPreview({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <div className="space-y-4">
      <DatePicker
        value={date}
        onChange={setDate}
        placeholder="Select a date..."
        theme={theme}
        variant="bordered"
      />
      <div className="text-sm text-white/40">
        Selected: <span className="text-white/70">{date ? date.toDateString() : 'None'}</span>
      </div>
    </div>
  );
}

function DatePickerWithPresetsPreview() {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <div className="space-y-4">
      <DatePicker
        value={date}
        onChange={setDate}
        placeholder="Pick a date..."
        theme="dark"
        variant="bordered"
        presets={[
          { label: 'Today', value: new Date() },
          { label: 'Tomorrow', value: new Date(Date.now() + 86400000) },
          { label: 'Next Week', value: new Date(Date.now() + 7 * 86400000) },
        ]}
      />
      <div className="text-sm text-white/40">
        Selected: <span className="text-white/70">{date ? date.toDateString() : 'None'}</span>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────

export default function CalendarPage() {
  return (
    <DocsPageLayout
      category={calendarData.category}
      title={calendarData.title}
      description={calendarData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...calendarData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: 'props', title: 'Props' },
        { id: 'date-picker-props', title: 'DatePicker Props' },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Installation
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Install the Calendar component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={calendarData.installation.command} />
      </section>

      <section className="mb-14" id="usage">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Usage
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Import the component and use it in your application.
        </p>
        <div className="space-y-4">
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Import
            </p>
            <CodeBlock code={calendarData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={calendarData.usage.basic} />
          </div>
        </div>
      </section>

      <section className="mb-14" id="examples">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Examples
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-6 leading-relaxed">
          Common use cases and configurations.
        </p>
        {calendarData.sections.map((section) => (
          <DocsSection
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
          >
            <div className="space-y-4">
              {section.examples.map((example, idx) => (
                <div key={idx}>
                  <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
                    {example.label}
                  </p>
                  <ComponentPreview>{example.preview}</ComponentPreview>
                  <div className="mt-3">
                    <CodeBlock code={example.code} />
                  </div>
                </div>
              ))}
            </div>
          </DocsSection>
        ))}
      </section>

      <section className="remove-scroll mb-14" id="props">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Props
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-5 leading-relaxed">
          All props available on the Calendar component.
        </p>
        <PropsTable props={calendarData.props} />
      </section>

      <section className="remove-scroll mb-14" id="date-picker-props">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          DatePicker Props
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-5 leading-relaxed">
          Props specific to the DatePicker dropdown input component.
        </p>
        <PropsTable props={calendarData.datePickerProps} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}