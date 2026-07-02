import CodeBlock from '@/components/docs/CodeBlock';
import InstallCommand from '@/components/docs/InstallCommand';

function page() {
  return (
    <div className="z-20 w-full h-screen pt-50">
      <InstallCommand command="shadcn@latest add aphelioui/com/button" />
      <CodeBlock code={`import { Button } from "@/components/ui/button"`} />
    </div>
  );
}
export default page;
