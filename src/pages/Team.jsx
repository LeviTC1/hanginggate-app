import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const team = [
  {
    name: 'Mark Thomas',
    role: 'Owner',
    tenure: '35 years at The Hanging Gate',
    bio: 'I am now in my 35th year of being here at the Hanging Gate. I love my job as much today as I did back in 1991. I have a fantastic team and every day I am so thankful that not only am I doing a job I love, but I get to do it with a very special team of people.',
    photo: '/images/team-mark.png',
    alt: 'Mark Thomas - Owner at The Hanging Gate',
  },
  {
    name: 'Keely Oldham',
    role: 'Manageress',
    tenure: '22 years with the team',
    bio: 'Keely has been with us now for a staggering 22 years and her lovely nature and people skills make her a hit with all our diners. Keely is currently the face you all see on your arrival. She is very professional and dedicated to her work and takes care of the day to day running of the business.',
    photo: '/images/team-keely.png',
    alt: 'Keely Oldham - Manageress at The Hanging Gate',
  },
  {
    name: 'Tony Connor',
    role: 'Head Chef',
    tenure: '15 years in the kitchen',
    bio: "Tony has been with us now for 15 years and is our Head Chef. He has a vast experience in cheffing and we feel very lucky to have someone of Tony's talents and expertise working with us. Tony is a pleasure to work with and as chefs go, is of a calm nature.",
    photo: '/images/team-tony.png',
    alt: 'Tony Connor - Head Chef at The Hanging Gate',
  },
  {
    name: 'Kieran Thomas',
    role: 'Future Landlord',
    tenure: 'Born into the business',
    bio: 'Kieran is now 13 and even from an early age is showing that he wants to take over when his dad retires. He helps with all the outside catering and helps with all the deliveries.',
    photo: '/images/team-kieran.jpg',
    alt: 'Kieran Thomas at The Hanging Gate',
  },
]

export default function Team() {
  return (
    <div>
      <SEO
        path="/team"
        description="Meet the team at The Hanging Gate in Chapel-en-le-Frith, High Peak, Derbyshire. Owner Mark Thomas, Keely Oldham, Tony Connor and Kieran Thomas."
        image="/images/team-mark.png"
      />

      <PageHero title="Meet the Team" subtitle="The people behind The Hanging Gate" />

      <section className="container py-14 md:py-16">
        <div className="mx-auto max-w-[1060px]">
          <div className="text-center">
            <p className="section-label">Our People</p>
            <p className="mx-auto mt-3 max-w-[66ch] text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              A family-run pub only works when the people behind it care deeply. Here are the faces that
              welcome you, cook for you, and keep everything running day to day.
            </p>
          </div>

          <div className="mt-9 grid gap-6">
            {team.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--surface-card)] shadow-[0_14px_30px_rgba(0,0,0,0.2)]"
              >
                <div className="grid md:grid-cols-[220px_1fr]">
                  <div className="relative h-[240px] bg-[var(--surface-peat)] md:h-full">
                    <img
                      src={member.photo}
                      alt={member.alt}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.opacity = '0'
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,16,11,0.42),rgba(10,16,11,0.04))]" />
                  </div>

                  <div className="p-6 md:p-7">
                    <p className="section-label">{member.role}</p>
                    <h2 className="mt-2 font-display text-[clamp(28px,3.2vw,40px)] leading-[1.05] text-[var(--text-inverse)]">
                      {member.name}
                    </h2>
                    <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--gold-light)]">
                      {member.tenure}
                    </p>
                    <p
                      className="mt-5 text-[16px] leading-[1.8] text-[var(--text-secondary)]"
                      style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic' }}
                    >
                      {member.bio}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--radius-lg)] border border-[rgba(200,144,26,0.35)] bg-[linear-gradient(160deg,#162017,#243125)] p-7 text-center shadow-[0_16px_36px_rgba(0,0,0,0.26)] md:p-9">
            <p className="font-display text-[clamp(28px,3.5vw,40px)] text-[var(--text-inverse)]">
              A family business through and through
            </p>
            <p className="mx-auto mt-3 max-w-[62ch] text-[15px] leading-[1.8] text-[rgba(241,244,236,0.84)]">
              From 1991 to today, The Hanging Gate has been run with care, consistency, and real pride in
              every guest experience.
            </p>
            <div className="mt-6">
              <Link to="/book" className="btn btn-primary">
                Reserve Your Table
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
