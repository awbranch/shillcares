import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import WorkCard from 'components/WorkCard';

interface Props {}

const Work: NextPage = ({}: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">Our Work</Typography>
        <Typography variant="subtitle1" sx={{ mt: 3 }}>
          We work with organizations in the Rochester and Finger Lakes areas of
          New York that are lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </Typography>

        <Stack spacing={{ xs: 15, sm: 10 }} sx={{ mt: { xs: 15, sm: 10 } }}>
          <WorkCard
            image={'work/lollypop.png'}
            organization={'Lollypop Farm'}
            link={'https://www.lollypop.org/get-involved/'}
          >
            <Typography variant="body1" paragraph>
              <strong>Lollypop Farm:</strong> Lollypop Farm, the Humane Society
              of Greater Rochester, has been helping animals and people since
              1873. Support from the community enables around 115 staff members
              and more than 800 volunteers to care for approximately 10,000
              animals each year and makes various possible programs to address
              issues that contribute to the surrender of unwanted animals.
            </Typography>
            <Typography variant="body1" paragraph>
              Lollypop is not your typical animal welfare shelter. They work to
              build a just and compassionate world for all animals. They help to
              save animals from abuse and suffering through justice, prevention,
              and life-saving care. With a main campus in Fairport and three
              other adoption centers throughout the community, the organization
              provides shelter, care, and adoption for dogs, cats, small
              animals, birds, reptiles, horses, and other farm animals.
            </Typography>
            <Typography variant="body1" paragraph>
              Long-time animal lovers Molly and Ed took on the role of Co-Chairs
              for the “Kindness for All Kind” campaign at Lollypop Farm. This
              fundraising initiative will address the needs of the ever-changing
              landscape in animal welfare. The MESCF kicked off the campaign
              with a donation to commit to the welfare of animals who have no
              voice.
            </Typography>
            <Typography variant="body1" paragraph>
              There are many ways to help support animals at Lollypop Farm.
              Donations of funds, supplies, or volunteer hours make a real
              difference in the lives of pets in need in our community.
            </Typography>
          </WorkCard>
          <WorkCard
            image={'work/wilmont.png'}
            organization={'Wilmont Cancer Institute'}
            link={'www.urmc.rochester.edu/cancer-institute.aspx'}
          >
            <Typography variant="body1" paragraph>
              <strong>Wilmont Cancer Institute:</strong> UR Medicine&apos;s
              Cancer Institute provides world-class cancer treatment and care
              and conducts pivotal research. Their goal is to prevent and
              conquer cancer through innovation in science, patient care,
              education, and community outreach. Based in Rochester, as part of
              the University of Rochester Medical Center system, Wilmot serves
              approximately 3 million people in a 27-county region in western
              and central New York. Established in 1974, it has a long history
              of outstanding clinical care and research breakthroughs. The
              Wilmot Cancer Institute leads the region in cancer treatment and
              is internationally known for research discoveries that have
              changed the standard of care.
            </Typography>
            <Typography variant="body1" paragraph>
              In 2022, members of the MESCF attended the Toast to Your Health
              Wine Auction to benefit Wilmot Cancer Institute. After learning
              about the Institute, our Foundation contributed to help aid in
              their research discoveries.
            </Typography>
            <Typography variant="body1" paragraph>
              Cancer will soon eclipse cardiovascular disease as the leading
              cause of death worldwide. Tomorrow’s cures are needed now.
            </Typography>
          </WorkCard>
          <WorkCard
            image={'work/spcc.png'}
            organization={'SPCC of Rochester'}
            link={'https://www.spcc-roch.org/'}
          >
            <Typography variant="body1" paragraph>
              <strong>
                Society for the Protection and Care of Children (SPCC):
              </strong>{' '}
              SPCC is the country&apos;s oldest non-profit agency focused on
              meeting the needs of children and families facing various
              hardships and trauma. Their mission is to provide the best
              opportunities for a bright future by respectfully partnering with
              children and their families, advocating for their health,
              well-being, and safety, and working to heal and strengthen
              relationships. SPCC provides child protective services and
              organizes foster care for abused children. Currently, they operate
              seven programs which together serve 7,000 individuals per year.
            </Typography>
            <Typography variant="body1" paragraph>
              MESCF recognized a need within SPCC for a Director of Development
              to help them increase their donations. Previously, there was no
              Development position within the organization. The new Director of
              Development would organize strategic fundraising events and
              intentionally cultivate donor relationships. Increasing
              unrestricted dollars would allow SPCC to deliver better services
              that best meet children&apos;s needs and stabilize cash flow
              challenges challenges inherent in grant funding. Knowing the
              long-term benefit of having a Director of Development, MESCF was
              excited and grateful to fund this position&apos;s first
              year&apos;s salary.
            </Typography>
            <Typography variant="body1" paragraph>
              The needs of families in our community far outweigh available
              resources, and tangible needs often go unmet. There are many
              creative ways to show support for children and families.
            </Typography>
          </WorkCard>
          <WorkCard
            image={'work/st-peters.png'}
            organization={"St. Peter's Kitchen"}
            link={'https://stpeterskitchen.org/'}
          >
            <Typography variant="body1" paragraph>
              <strong>St. Peter&apos;s Kitchen:</strong> St. Peter’s Kitchen has
              served the Rochester community for over 39 years. They serve a
              hot, well-balanced lunch to 180 people daily, Monday through
              Friday. Their mission is to strive to build a stronger community
              by welcoming all in need, treating everyone with love, and
              attempting to eradicate hunger in downtown Rochester. Their guests
              come from all walks of life, and many face troubles with
              addiction, mental illness, physical illness, homelessness, and
              severe poverty. They are a non-referral agency, meaning anyone who
              walks through their doors is welcome to share in a meal.
            </Typography>
            <Typography variant="body1" paragraph>
              After a tour of St. Peter’s kitchen, MESCF suggested they evaluate
              their equipment and facility needs. The staff at St. Peter’s
              determined to meet current demand, they needed to look at
              production capacity and progress flow. They decided they could use
              a new convection oven, an insulated holding cabinet, a new 2-door
              refrigerator, a 3-bay sink, a new oven, and a new dishwasher. The
              MESCF was thrilled to grant a donation to help St. Peter’s obtain
              the equipment, have it installed keep on doing what they do best –
              feed our hungry.
            </Typography>
          </WorkCard>
          <WorkCard
            image={'work/willow.png'}
            organization={'Willow Domestic Violence Center'}
            link={'https://willowcenterny.org/'}
          >
            <Typography variant="body1" paragraph>
              <strong>Willow Domestic Violence Center:</strong> Sed ut Willow
              Domestic Violence Center is an emergency shelter providing a safe
              haven for over 300 adults and 250 children annually. They build a
              safer community through shelter, services, and support for
              survivors of domestic violence and human trafficking. The mission
              of Willow is to prevent domestic violence and ensure every
              survivor has access to the services and support needed along the
              journey to a safe and empowered life. Their vision is a community
              free from domestic violence, where healthy relationships thrive.
            </Typography>
            <Typography variant="body1" paragraph>
              Willow has a 40-year history as Alternative for Battered Women
              (ABW) in Rochester. In 2015, ABW changed its name to Willow. MESCF
              Founder Ed Shill served as a board member on Willow from
              2007-2017. In November 2017, Molly and Ed contributed $500,000
              toward their new shelter, The Shill Family Center.
            </Typography>
            <Typography variant="body1" paragraph>
              In 2023, the MESCF donated as the Presenting Sponsor for the
              Willow Ball. This event will raise more money and celebrate the
              25th anniversary of Deaf Ignite. This program within Willow serves
              more than 60 deaf survivors each year. Willow’s Deaf IGNITE
              program is staffed by individuals who are Dear and fluent in
              American Sign Language (ASL), and who can provide support and
              services in a culturally and linguistically competent way.
            </Typography>
            <Typography variant="body1" paragraph>
              There are many ways to give your time and talent to help survivors
              thrive. By supporting Willow, you are investing in the healing
              journey of survivors here in our community. With help, we can tell
              survivors; they are not alone.
            </Typography>
          </WorkCard>
          <WorkCard
            image={'work/golisano.png'}
            organization={"Golisano Children's Hospital"}
            link={'https://www.urmc.rochester.edu/childrens-hospital.aspx'}
          >
            <Typography variant="body1" paragraph>
              <strong>Golisano Children&apos;s Hospital:</strong> Sed ut
              University of Rochester&apos;s Golisano Children&apos;s Hospital
              is a nationally ranked, freestanding acute care children&apos;s
              hospital in Rochester, NY. It provides safe, effective,
              innovative, and family-centered care for children in the Central
              New York region. The Region&apos;s only Level 1 Trauma and Burn
              Center offers a complete range of health services for children
              from birth to 19 years of age.
            </Typography>
            <Typography variant="body1" paragraph>
              Molly Shill joined the Golisano Children&apos;s Hospital Board of
              Directors in August 2022. At their Denim and Diamonds Gala that
              year, the MESCF donated to help support their new pediatric
              immediate access walk-in center. This new center will provide
              mental health emergency assessments, community-wide coordination
              of youth family crisis services, and develop innovative practices
              for crisis intervention.
            </Typography>
            <Typography variant="body1" paragraph>
              Golisano Children&apos;s Hospital hosts many annual events to
              support the children they care for. For information on annual
              events, call their Office of Advancement at (585) 273-5948. There
              are many other ways to give to help support them.
            </Typography>
          </WorkCard>
          <WorkCard
            image={'work/meals-for-homeless.png'}
            organization={'Meals for the Homeless'}
            link={'https://www.facebook.com/groups/351197560176136'}
          >
            <Typography variant="body1" paragraph>
              <strong>Meals for the Homeless:</strong> Meals for the Homeless is
              a volunteer-run group that organizes on Facebook. Their mission is
              to coordinate homecooked dinner meals to be prepared and served on
              a scheduled basis to houseless families living in local motels and
              hotels.
            </Typography>
            <Typography variant="body1" paragraph>
              Often houseless families cannot live in a shelter due to unusual
              circumstances and are placed in local motels or hotels. These
              rooms do not have kitchens, so warm, cooked meals are unavailable.
              Meals for the Homeless is a volunteer effort that serves dinner
              meals until more official resources are available. Many
              school-aged children are living in these motels.
            </Typography>
            <Typography variant="body1" paragraph>
              In August of 2022, it came to the attention of the MESCF that this
              group needed a sizeable industrial refrigerator to store food for
              the families. After the foundation provided the fridge, one
              volunteer wrote the following:
            </Typography>
            <Typography variant="body1" paragraph>
              &quot;We are so grateful to the Molly and Ed Shill Cares
              Foundation. The donation of the industrial refrigerator has been
              life-changing for our &quot;Meals for the Homeless&quot; Facebook
              Group. We are not affiliated with any specific organization, just
              a group that wants to show compassion to our homeless community
              members or in the county&apos;s transitional housing programs. As
              such, we do not receive government funding, only limited donations
              from other organizations. We rely fully on volunteers! The clients
              here have no way to cook for themselves. We are currently serving
              dinner to about 75-80 people, with about 55 of those being
              children. We serve dinner Monday-Thursday and give each child a
              lunch bag for the next day.&quot;
            </Typography>
          </WorkCard>
          <WorkCard
            image={'work/habitat-for-cats.png'}
            organization={'Habitat for Cats'}
            link={'https://habitatforcats.com/'}
          >
            <Typography variant="body1" paragraph>
              <strong>Habitat for Cats:</strong> “Western New York Feral Cat
              Specialists!”
            </Typography>
            <Typography variant="body1" paragraph>
              Habitat for Cats is a nonprofit, all-volunteer organization
              specializing in the Trap-Neuter-Return of feral and abandoned
              cats. They focus on reducing cat overpopulation by implementing a
              trap-neuter-return [TNR] program and educating the public on the
              benefits of this non-lethal method of population control. Their
              teams help relocate and alter over one hundred cats throughout the
              year. They save innocent lives because many of these cats are
              simply abandoned. They provide feeding, bedding, and basic shelter
              for their colonies.
            </Typography>
            <Typography variant="body1" paragraph>
              The ME Shill Cares Foundation donated to Habitat for Cats in
              January 2023. There were a few frigid days, and Habitat for Cats
              experienced dire emergencies with incredible expenses. They had
              taken in over 15 other cats from the recent wintry storms and were
              at max capacity. The cats required upfront costs for combo
              resting, vaccines, worming, and other immediate care. In addition,
              Habitat for Cats spays and neuters all cats before adopting them.
            </Typography>
            <Typography variant="body1" paragraph>
              There are many ways to help Habitat for Cats through donations,
              becoming a foster, or even adopting a feral cat. They are also
              always looking to rehome feral cats to new barns or shops where
              you can care for them. It is also super helpful to spread the word
              about what an excellent job Habitat for Cats is doing in our
              community. Financial donations are often used to purchase
              equipment used to trap, transport, and relocate cats rescued by
              their team.
            </Typography>
          </WorkCard>
        </Stack>
      </Container>
    </Main>
  );
};

export default Work;
