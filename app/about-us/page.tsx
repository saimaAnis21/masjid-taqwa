import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutUsPage() {
  const POLICYLINKS = [
    {
      title: "Conditions of Entry",
      href: "https://masjidtaqwa.org.au/wp-content/uploads/2020/05/condition-of-entry-7.05.20.pdf",
    },
    {
      title: "Our Priorities",
      href: "https://masjidtaqwa.org.au/wp-content/uploads/2019/08/Our-Priorties.pdf",
    },
    {
      title: "Our Grievance Procedure",
      href: "https://masjidtaqwa.org.au/wp-content/uploads/2019/08/Grievance-Procedure.pdf",
    },
    {
      title: "Our Values and Purpose",
      href: "https://masjidtaqwa.org.au/wp-content/uploads/2019/08/Values-Purpose.pdf",
    },
    {
      title: "Our Money Collection and Distribution",
      href: "https://masjidtaqwa.org.au/wp-content/uploads/2019/08/Money-collection-distribution-Public-Notice-6.pdf",
    },
    {
      title: "Our Code of Conduct",
      href: "https://masjidtaqwa.org.au/wp-content/uploads/2020/05/Code-Of-conduct-8.5.20.pdf",
    },
    {
      title: "Our Code of Conduct",
      href: "https://masjidtaqwa.org.au/wp-content/uploads/2020/05/Code-Of-conduct-8.5.20.pdf",
    },
    {
      title: "Our equal opportunity, sexual harassment, discrimination and bullying policy",
      href: "https://masjidtaqwa.org.au/wp-content/uploads/2019/08/Equal-Opportunity-Sexual-Harassment-Discrimination-Bullying.pdf",
    },
    {
      title: "Our Whistle-blower policy",
      href: "https://masjidtaqwa.org.au/wp-content/uploads/2019/10/Whistle-Blower-Policy.pdf",
    },
    {
      title: "Jamaat Form",
      href: "https://masjidtaqwa.org.au/wp-content/uploads/2019/12/Jamaat-Register-checklist.pdf",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-justify mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-green-700">About Us</h1>
        <div className="text-muted-foreground">
          <p>Learn more about our company, our mission, and the policies that guide our work.</p>
          <br />
          <p>
            The initiative of building a Masjid on the North side came about due to Muslim brothers
            from the North in need of a place to read Salaah and so it started out with 6 brothers
            using one of their living rooms to pray in Jamaat.
          </p>
          <br />
          <p>
            In mid-2000 the dream and need became a reality and through hard work, dedication and
            guidance from the Almighty Allah (swt) Masjid Taqwah in Bald Hills, was born. It started
            off in a small tin shed with only minimal facilities, but through financial support of
            the Muslim brothers and sisters in the greater Brisbane region and the greatness of
            Almighty Allah (swt) the Masjid has grown to what it is today.
          </p>
          <br />
          <p>
            Today we are fortunate enough to have a beautiful Masjid which caters for a constantly
            growing community. With facilities which include but are not limited to the following
            (for both men and women); Air conditioned Salaah facilities for approximately 300 men
            and 80 women; toilets; wudhu facilities; parking area for approximately 80 cars.
          </p>
          <br />
          <p>Alhamdulillah many families frequent the Masjid today.</p>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="policies">
          <AccordionTrigger className="text-xl font-medium text-green-700">
            View Our Policies
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <div className="space-y-6">
              <ul className="space-y-2">
                {POLICYLINKS.map((item) => (
                  <li>
                    <a
                      className="hover:underline hover:text-green-700"
                      target="_blank"
                      href={item.href}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
