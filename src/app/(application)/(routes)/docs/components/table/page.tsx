'use client';

import Table, {
  Avatar,
  StatusBadge,
  IntentBadge,
  FilterInput,
  CheckIcon,
  CrossIcon,
} from '@/registry/components/table/Table';
import InstallCommand from '@/components/docs/InstallCommand';
import CodeBlock from '@/components/docs/CodeBlock';
import ComponentPreview from '@/components/docs/ComponentPreview';
import PropsTable from '@/components/docs/PropsTable';
import DocsSection from '@/components/docs/DocsSection';
import DocsPageLayout from '@/components/docs/DocsPageLayout';
import BottomNav from '@/components/docs/BottomNav';
import DocsFooter from '@/components/docs/DocsFooter';
import { useState, useMemo } from 'react';

// ─── Demo Data ───────────────────────────────────────────────────────────

const USERS = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'Designer',
    department: 'Design',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=1',
    lastActive: '2 min ago',
    projects: 12,
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'Developer',
    department: 'Engineering',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=2',
    lastActive: '1 hour ago',
    projects: 8,
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol@example.com',
    role: 'Product Manager',
    department: 'Product',
    status: 'Inactive',
    avatar: 'https://i.pravatar.cc/150?img=3',
    lastActive: '3 days ago',
    projects: 5,
  },
  {
    id: 4,
    name: 'Dave Wilson',
    email: 'dave@example.com',
    role: 'Developer',
    department: 'Engineering',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=4',
    lastActive: '15 min ago',
    projects: 10,
  },
  {
    id: 5,
    name: 'Eve Brown',
    email: 'eve@example.com',
    role: 'Marketing Lead',
    department: 'Marketing',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=5',
    lastActive: '2 hours ago',
    projects: 7,
  },
];

const COMPATIBILITY_DATA = [
  {
    feature: 'Dark Mode',
    'Basic Plan': true,
    'Pro Plan': true,
    Enterprise: true,
  },
  {
    feature: 'Advanced Analytics',
    'Basic Plan': false,
    'Pro Plan': true,
    Enterprise: true,
  },
  {
    feature: 'Team Collaboration',
    'Basic Plan': false,
    'Pro Plan': true,
    Enterprise: true,
  },
  {
    feature: 'Priority Support',
    'Basic Plan': false,
    'Pro Plan': false,
    Enterprise: true,
  },
  {
    feature: 'Custom Integrations',
    'Basic Plan': false,
    'Pro Plan': false,
    Enterprise: true,
  },
  {
    feature: 'API Access',
    'Basic Plan': false,
    'Pro Plan': true,
    Enterprise: true,
  },
];

const INTENT_DATA = [
  { id: '1', item: 'Project Alpha', status: 'Active', priority: 'C' },
  { id: '2', item: 'Project Beta', status: 'In Progress', priority: 'T' },
  { id: '3', item: 'Project Gamma', status: 'Review', priority: 'I' },
  { id: '4', item: 'Project Delta', status: 'Done', priority: 'N' },
  { id: '5', item: 'Project Epsilon', status: 'Active', priority: 'C' },
];

// ─── Columns Definitions ─────────────────────────────────────────────────

const userColumns = [
  {
    key: 'name',
    header: 'User',
    sortable: true,
    render: (row: (typeof USERS)[0]) => (
      <div className="flex items-center gap-3">
        <Avatar src={row.avatar} fallback={row.name} />
        <div>
          <div className="font-medium">{row.name}</div>
          <div className="text-xs text-aphelion-light-text-primary">
            {row.email}
          </div>
        </div>
      </div>
    ),
  },
  { key: 'role', header: 'Role', sortable: true },
  { key: 'department', header: 'Department', sortable: true },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: (row: (typeof USERS)[0]) => <StatusBadge status={row.status} />,
  },
  {
    key: 'projects',
    header: 'Projects',
    sortable: true,
    align: 'center' as const,
  },
  { key: 'lastActive', header: 'Last Active', sortable: true },
];

const compatColumns = [
  { key: 'feature', header: 'Feature', sortable: false },
  {
    key: 'Basic Plan',
    header: 'Basic',
    sortable: false,
    align: 'center' as const,
    render: (row: (typeof COMPATIBILITY_DATA)[0]) =>
      row['Basic Plan'] ? <CheckIcon /> : <CrossIcon />,
  },
  {
    key: 'Pro Plan',
    header: 'Pro',
    sortable: false,
    align: 'center' as const,
    render: (row: (typeof COMPATIBILITY_DATA)[0]) =>
      row['Pro Plan'] ? <CheckIcon /> : <CrossIcon />,
  },
  {
    key: 'Enterprise',
    header: 'Enterprise',
    sortable: false,
    align: 'center' as const,
    render: (row: (typeof COMPATIBILITY_DATA)[0]) =>
      row['Enterprise'] ? <CheckIcon /> : <CrossIcon />,
  },
];

const intentColumns = [
  { key: 'id', header: 'ID', sortable: true },
  { key: 'item', header: 'Item', sortable: true },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    render: (row: (typeof INTENT_DATA)[0]) => (
      <StatusBadge status={row.status} />
    ),
  },
  {
    key: 'priority',
    header: 'Priority',
    sortable: true,
    align: 'center' as const,
    render: (row: (typeof INTENT_DATA)[0]) => (
      <IntentBadge label={row.priority} />
    ),
  },
];

// ─── Table Data ──────────────────────────────────────────────────────────

const tableData = {
  name: 'Table',
  slug: 'table',
  title: 'Table',
  description:
    'A powerful table component with sorting, selection, filtering, multiple variants, custom cell rendering, and built-in sub-components like Avatar, StatusBadge, and IntentBadge.',
  category: 'Data Display',
  installation: {
    command: 'shadcn@latest add aphelio/c/table',
  },
  usage: {
    import:
      "import Table, { Avatar, StatusBadge } from '@/components/ui/table'",
    basic: `const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  { key: 'role', header: 'Role', sortable: true },
];

const data = [
  { name: 'Alice', email: 'alice@example.com', role: 'Designer' },
  { name: 'Bob', email: 'bob@example.com', role: 'Developer' },
];

<Table columns={columns} data={data} />`,
  },
  sections: [
    {
      id: 'default',
      title: 'Default',
      description: 'Basic table with sorting, selection, and filtering.',
      examples: [
        {
          label: 'With Selection & Sorting',
          code: `<Table
  columns={columns}
  data={data}
  selectable
  selectedRows={selectedRows}
  onRowSelect={(id, selected) => {
    // handle selection
  }}
  onSelectAll={(selected) => {
    // handle select all
  }}
  sortColumn={sortColumn}
  sortDirection={sortDirection}
  onSort={handleSort}
  filters={
    <FilterInput
      placeholder="Search users..."
      value={searchFilter}
      onChange={setSearchFilter}
    />
  }
  stickyHeader
  maxHeight="400px"
/>`,
          preview: <DefaultTablePreview />,
        },
      ],
    },
    {
      id: 'variants',
      title: 'Variants',
      description: 'Multiple visual variants for different contexts.',
      examples: [
        {
          label: 'Striped',
          code: `<Table
  columns={columns.slice(0, 4)}
  data={data.slice(0, 5)}
  variant="striped"
/>`,
          preview: (
            <Table
              columns={userColumns.slice(0, 4)}
              data={USERS.slice(0, 5)}
              variant="striped"
            />
          ),
        },
        {
          label: 'No Dividers',
          code: `<Table
  columns={columns.slice(0, 4)}
  data={data.slice(0, 5)}
  variant="no-dividers"
/>`,
          preview: (
            <Table
              columns={userColumns.slice(0, 4)}
              data={USERS.slice(0, 5)}
              variant="no-dividers"
            />
          ),
        },
        {
          label: 'Vertical Lines',
          code: `<Table
  columns={columns.slice(0, 5)}
  data={data.slice(0, 5)}
  variant="vertical-lines"
/>`,
          preview: (
            <Table
              columns={userColumns.slice(0, 5)}
              data={USERS.slice(0, 5)}
              variant="vertical-lines"
            />
          ),
        },
        {
          label: 'Dense',
          code: `<Table
  columns={columns.slice(0, 4)}
  data={data.slice(0, 5)}
  variant="dense"
  size="sm"
/>`,
          preview: (
            <Table
              columns={userColumns.slice(0, 4)}
              data={USERS.slice(0, 5)}
              variant="dense"
              size="sm"
            />
          ),
        },
        {
          label: 'Card',
          code: `<Table
  columns={columns.slice(0, 4)}
  data={data.slice(0, 5)}
  variant="card"
  layout="card"
/>`,
          preview: (
            <Table
              columns={userColumns.slice(0, 4)}
              data={USERS.slice(0, 5)}
              variant="card"
              layout="card"
            />
          ),
        },
        {
          label: 'Vertical',
          code: `<Table
  columns={columns.slice(0, 4)}
  data={data.slice(0, 1)}
  variant="vertical"
  layout="vertical"
/>`,
          preview: (
            <Table
              columns={userColumns.slice(0, 4)}
              data={USERS.slice(0, 1)}
              variant="vertical"
              layout="vertical"
            />
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
          code: `<Table
  columns={columns}
  data={data}
  theme="dark"
  variant="striped"
/>`,
          preview: (
            <Table
              columns={userColumns.slice(0, 4)}
              data={USERS.slice(0, 4)}
              theme="dark"
              variant="striped"
            />
          ),
        },
        {
          label: 'Light Theme',
          code: `<div className="rounded-aphelion-xl bg-white p-6">
  <Table
    columns={columns}
    data={data}
    theme="light"
    variant="striped"
  />
</div>`,
          preview: (
            <div className="rounded-aphelion-xl bg-white p-6">
              <Table
                columns={userColumns.slice(0, 4)}
                data={USERS.slice(0, 4)}
                theme="light"
                variant="striped"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: 'custom-rendering',
      title: 'Custom Rendering',
      description: 'Use built-in sub-components for rich cell content.',
      examples: [
        {
          label: 'Avatar & StatusBadge',
          code: `const columns = [
  {
    key: 'name',
    header: 'User',
    render: (row) => (
      <div className="flex items-center gap-3">
        <Avatar src={row.avatar} fallback={row.name} />
        <div>
          <div className="font-medium">{row.name}</div>
          <div className="text-xs text-aphelion-light-text-primary">{row.email}</div>
        </div>
      </div>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    render: (row) => <StatusBadge status={row.status} />,
  },
];

<Table columns={columns} data={data} />`,
          preview: (
            <Table
              columns={[
                {
                  key: 'name',
                  header: 'User',
                  render: (row: (typeof USERS)[0]) => (
                    <div className="flex items-center gap-3">
                      <Avatar src={row.avatar} fallback={row.name} />
                      <div>
                        <div className="font-medium">{row.name}</div>
                        <div className="text-xs text-aphelion-light-text-primary">
                          {row.email}
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  key: 'status',
                  header: 'Status',
                  render: (row: (typeof USERS)[0]) => (
                    <StatusBadge status={row.status} />
                  ),
                },
              ]}
              data={USERS.slice(0, 3)}
            />
          ),
        },
        {
          label: 'IntentBadge',
          code: `const columns = [
  { key: 'item', header: 'Item' },
  {
    key: 'priority',
    header: 'Priority',
    align: 'center',
    render: (row) => <IntentBadge label={row.priority} />,
  },
];

<Table columns={columns} data={data} variant="striped" />`,
          preview: (
            <Table
              columns={intentColumns}
              data={INTENT_DATA}
              variant="striped"
            />
          ),
        },
        {
          label: 'CheckIcon / CrossIcon',
          code: `const columns = [
  { key: 'feature', header: 'Feature' },
  {
    key: 'basic',
    header: 'Basic',
    align: 'center',
    render: (row) => row.basic ? <CheckIcon /> : <CrossIcon />,
  },
];

<Table columns={columns} data={data} variant="no-dividers" />`,
          preview: (
            <Table
              columns={compatColumns}
              data={COMPATIBILITY_DATA}
              variant="no-dividers"
            />
          ),
        },
      ],
    },
    {
      id: 'empty-state',
      title: 'Empty State',
      description: 'Display a message when no data is available.',
      examples: [
        {
          label: 'Empty Table',
          code: `<Table columns={columns} data={[]} />`,
          preview: <Table columns={userColumns.slice(0, 4)} data={[]} />,
        },
      ],
    },
  ],
  props: [
    {
      name: 'columns',
      type: 'Column[]',
      default: 'required',
      description:
        'Array of column definitions with key, header, sortable, align, and render.',
    },
    {
      name: 'data',
      type: 'any[]',
      default: 'required',
      description: 'Array of data rows to display.',
    },
    {
      name: 'variant',
      type: "'default' | 'striped' | 'no-dividers' | 'vertical-lines' | 'dense' | 'card' | 'vertical'",
      default: '"default"',
      description: 'Visual variant of the table.',
    },
    {
      name: 'theme',
      type: "'dark' | 'light'",
      default: '"dark"',
      description: 'Color theme of the table.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: '"md"',
      description: 'Size of the table cells and padding.',
    },
    {
      name: 'layout',
      type: "'table' | 'card' | 'vertical'",
      default: '"table"',
      description: 'Layout mode for the table display.',
    },
    {
      name: 'selectable',
      type: 'boolean',
      default: 'false',
      description: 'Enable row selection with checkboxes.',
    },
    {
      name: 'selectedRows',
      type: 'Set<string | number>',
      default: 'undefined',
      description: 'Set of selected row IDs.',
    },
    {
      name: 'onRowSelect',
      type: '(id: string | number, selected: boolean) => void',
      default: 'undefined',
      description: 'Callback fired when a row is selected.',
    },
    {
      name: 'onSelectAll',
      type: '(selected: boolean) => void',
      default: 'undefined',
      description: 'Callback fired when select all is toggled.',
    },
    {
      name: 'onRowClick',
      type: '(row: any) => void',
      default: 'undefined',
      description: 'Callback fired when a row is clicked.',
    },
    {
      name: 'sortColumn',
      type: 'string | null',
      default: 'null',
      description: 'Currently sorted column key.',
    },
    {
      name: 'sortDirection',
      type: "'asc' | 'desc' | null",
      default: 'null',
      description: 'Current sort direction.',
    },
    {
      name: 'onSort',
      type: '(column: string) => void',
      default: 'undefined',
      description:
        'Callback fired when a column header is clicked for sorting.',
    },
    {
      name: 'filters',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Filter elements rendered above the table.',
    },
    {
      name: 'stickyHeader',
      type: 'boolean',
      default: 'false',
      description: 'Make the table header sticky on scroll.',
    },
    {
      name: 'maxHeight',
      type: 'string',
      default: 'undefined',
      description: 'Maximum height of the table body with scroll.',
    },
    {
      name: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Additional classes for the table container.',
    },
  ],
};

const bottomNavItems = [
  {
    label: 'Dialog',
    href: '/docs/components/dialog',
    description: 'Modal overlay for confirmations and alerts.',
  },
  {
    label: 'Sheet',
    href: '/docs/components/sheet',
    description: 'Slide-in panel component.',
  },
];

// ─── Default Table Preview Component ───────────────────────────────────────

function DefaultTablePreview() {
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(
    new Set()
  );
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(
    null
  );
  const [searchFilter, setSearchFilter] = useState('');

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') setSortDirection('desc');
      else if (sortDirection === 'desc') {
        setSortColumn(null);
        setSortDirection(null);
      }
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const filteredData = useMemo(() => {
    if (!searchFilter) return USERS;
    const query = searchFilter.toLowerCase();
    return USERS.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query) ||
        user.department.toLowerCase().includes(query)
    );
  }, [searchFilter]);

  const sortedData = useMemo(() => {
    if (!sortColumn || !sortDirection) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortColumn as keyof typeof a];
      const bVal = b[sortColumn as keyof typeof b];
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortDirection === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection]);

  return (
    <Table
      columns={userColumns}
      data={sortedData}
      selectable
      selectedRows={selectedRows}
      onRowSelect={(id, selected) => {
        setSelectedRows((prev) => {
          const next = new Set(prev);
          if (selected) next.add(id);
          else next.delete(id);
          return next;
        });
      }}
      onSelectAll={(selected) => {
        if (selected) setSelectedRows(new Set(sortedData.map((_, i) => i)));
        else setSelectedRows(new Set());
      }}
      sortColumn={sortColumn}
      sortDirection={sortDirection}
      onSort={handleSort}
      filters={
        <FilterInput
          placeholder="Search users..."
          value={searchFilter}
          onChange={setSearchFilter}
        />
      }
      stickyHeader
      maxHeight="400px"
    />
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────

export default function TablePage() {
  return (
    <DocsPageLayout
      category={tableData.category}
      title={tableData.title}
      description={tableData.description}
      sideMapGroup={[
        { id: 'installation', title: 'Installation' },
        { id: 'usage', title: 'Usage' },
        { id: 'examples', title: 'Examples' },
        ...tableData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: 'props', title: 'Props' },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="font-['inter-bold'] text-[22px] text-white/90 mb-4">
          Installation
        </h2>
        <p className="font-['inter-rag'] text-[14px] text-white/70 mb-4 leading-relaxed">
          Install the Table component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={tableData.installation.command} />
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
            <CodeBlock code={tableData.usage.import} />
          </div>
          <div>
            <p className="font-['inter-semi'] text-[11px] text-white/50 mb-2 uppercase tracking-wider">
              Basic
            </p>
            <CodeBlock code={tableData.usage.basic} />
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
        {tableData.sections.map((section) => (
          <DocsSection
            key={section.id}
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
          All props available on the Table component.
        </p>
        <PropsTable props={tableData.props} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}
