"use client";

export default function AphelionTokenShowcase() {
  return (
    <main className="min-h-screen bg-aphelion-background p-10 text-aphelion-foreground">

      <div className="mx-auto max-w-7xl space-y-14">


        {/* COLORS */}

        <Section title="Color System">

          <div className="grid gap-5 md:grid-cols-4">

            <Box
              title="Primary"
              className="
              bg-aphelion-primary
              text-aphelion-primary-foreground
              "
            />

            <Box
              title="Secondary"
              className="
              bg-aphelion-secondary
              text-aphelion-secondary-foreground
              "
            />


            <Box
              title="Background"
              className="
              bg-aphelion-background
              border
              border-aphelion-border
              "
            />


            <Box
              title="Card"
              className="
              bg-aphelion-card
              border
              border-aphelion-border
              "
            />


            <Box
              title="Popover"
              className="
              bg-aphelion-popover
              border
              border-aphelion-border
              "
            />


            <Box
              title="Muted"
              className="
              bg-aphelion-muted
              "
            />


          </div>

        </Section>




        {/* TEXT */}


        <Section title="Text System">

          <div className="
          space-y-4
          rounded-aphelion-lg
          bg-aphelion-card
          border
          border-aphelion-border
          p-6
          ">


            <TextToken className="text-aphelion-text-primary">
              Primary Text
            </TextToken>


            <TextToken className="text-aphelion-text-secondary">
              Secondary Text
            </TextToken>


            <TextToken className="text-aphelion-text-muted">
              Muted Text
            </TextToken>


            <TextToken className="text-aphelion-text-disabled">
              Disabled Text
            </TextToken>


          </div>

        </Section>





        {/* STATUS */}



        <Section title="Status Colors">


          <div className="grid gap-5 md:grid-cols-4">


            <Box
              title="Success"
              className="
              bg-aphelion-success
              text-aphelion-success-foreground
              "
            />


            <Box
              title="Warning"
              className="
              bg-aphelion-warning
              text-aphelion-warning-foreground
              "
            />


            <Box
              title="Destructive"
              className="
              bg-aphelion-destructive
              text-aphelion-destructive-foreground
              "
            />


            <Box
              title="Info"
              className="
              bg-aphelion-info
              text-aphelion-info-foreground
              "
            />


          </div>


        </Section>






        {/* STATUS BACKGROUND */}



        <Section title="Status Background">


          <div className="grid gap-5 md:grid-cols-4">


            <Box
              title="Success Background"
              className="
              bg-aphelion-success-background
              "
            />


            <Box
              title="Warning Background"
              className="
              bg-aphelion-warning-background
              "
            />


            <Box
              title="Danger Background"
              className="
              bg-aphelion-destructive-background
              "
            />


            <Box
              title="Info Background"
              className="
              bg-aphelion-info-background
              "
            />


          </div>


        </Section>







        {/* BORDER */}



        <Section title="Border System">


          <div className="grid gap-5 md:grid-cols-4">


            <BorderBox className="border-aphelion-border">
              Default
            </BorderBox>


            <BorderBox className="border-aphelion-border-strong">
              Strong
            </BorderBox>


            <BorderBox className="border-aphelion-input-border">
              Input
            </BorderBox>


            <BorderBox className="border-aphelion-divider">
              Divider
            </BorderBox>


          </div>


        </Section>








        {/* INTERACTION */}




        <Section title="Interaction">


          <div className="grid gap-5 md:grid-cols-3">


            <button
              className="
              rounded-aphelion-md
              bg-aphelion-card
              border
              border-aphelion-border
              p-5
              hover:bg-aphelion-hover
              "
            >
              Hover State
            </button>



            <button
              className="
              rounded-aphelion-md
              bg-aphelion-card
              border
              border-aphelion-border
              p-5
              active:bg-aphelion-active
              "
            >
              Active State
            </button>



            <button
              className="
              rounded-aphelion-md
              bg-aphelion-card
              border
              border-aphelion-border
              p-5
              ring-2
              ring-aphelion-ring
              "
            >
              Focus Ring
            </button>



          </div>


        </Section>








        {/* RADIUS */}



        <Section title="Radius">


          <div className="flex flex-wrap gap-5">


            <RadiusBox className="rounded-aphelion-none">
              none
            </RadiusBox>


            <RadiusBox className="rounded-aphelion-xs">
              xs
            </RadiusBox>


            <RadiusBox className="rounded-aphelion-sm">
              sm
            </RadiusBox>


            <RadiusBox className="rounded-aphelion-md">
              md
            </RadiusBox>


            <RadiusBox className="rounded-aphelion-lg">
              lg
            </RadiusBox>


            <RadiusBox className="rounded-aphelion-xl">
              xl
            </RadiusBox>


            <RadiusBox className="rounded-aphelion-2xl">
              2xl
            </RadiusBox>


            <RadiusBox className="rounded-aphelion-full">
              full
            </RadiusBox>


          </div>


        </Section>









        {/* SHADOW */}



        <Section title="Shadow">


          <div className="grid gap-6 md:grid-cols-3">


            <Shadow className="shadow-aphelion-sm">
              Small
            </Shadow>


            <Shadow className="shadow-aphelion-md">
              Medium
            </Shadow>


            <Shadow className="shadow-aphelion-lg">
              Large
            </Shadow>


          </div>


        </Section>









        {/* REAL COMPONENT */}




        <Section title="Component Example">


          <div
            className="
            rounded-aphelion-xl
            bg-aphelion-card
            border
            border-aphelion-border
            shadow-aphelion-md
            p-8
            "
          >


            <h3 className="
            text-xl
            font-bold
            text-aphelion-text-primary
            ">
              Aphelion Card
            </h3>



            <p className="
            mt-2
            text-aphelion-text-secondary
            ">
              Fully powered by semantic tokens.
            </p>



            <input
              placeholder="Input example"
              className="
              mt-5
              w-full
              rounded-aphelion-md
              border
              border-aphelion-input-border
              bg-aphelion-background
              p-3
              text-aphelion-text-primary
              "
            />



            <button
              className="
              mt-5
              rounded-aphelion-md
              bg-aphelion-primary
              px-5
              py-2
              text-aphelion-primary-foreground
              "
            >
              Primary Button
            </button>


          </div>


        </Section>


      </div>


    </main>
  );
}







function Section({
  title,
  children
}:{
  title:string;
  children:React.ReactNode;
}){

return(
<section className="space-y-5">

<h2 className="text-2xl font-bold">
{title}
</h2>

{children}

</section>
)

}



function Box({
title,
className
}:{
title:string;
className:string;
}){

return(
<div className={`
h-28
flex
items-center
justify-center
rounded-aphelion-lg
border
border-aphelion-border
${className}
`}>
{title}
</div>
)

}



function BorderBox({
children,
className
}:any){

return(
<div className={`
rounded-aphelion-md
border
p-6
${className}
`}>
{children}
</div>
)

}



function RadiusBox({
children,
className
}:any){

return(
<div className={`
h-20
w-20
flex
items-center
justify-center
bg-aphelion-primary
text-aphelion-primary-foreground
${className}
`}>
{children}
</div>
)

}



function Shadow({
children,
className
}:any){

return(
<div className={`
h-28
rounded-aphelion-lg
bg-aphelion-card
border
border-aphelion-border
flex
items-center
justify-center
${className}
`}>
{children}
</div>
)

}



function TextToken({
children,
className
}:any){

return(
<p className={className}>
{children}
</p>
)

}