import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

const team = [
  {
    name: 'Mark Thomas',
    role: 'Owner & Licensee',
    tenure: '35 years',
    bio: "I am now in my 35th year of being here at the Hanging Gate. I love my job as much today as I did back in 1991. I have a fantastic team and every day I am so thankful that not only am I doing a job I love, but I get to do it with a very special team of people.",
    photo: '/images/team-mark.png',
    alt: 'Mark Thomas - Owner of The Hanging Gate',
    color: '#8B1A1A',
  },
  {
    name: 'Keely Oldham',
    role: 'Manageress',
    tenure: '22 years',
    bio: "Keely has been with us now for a staggering 22 years and her lovely nature and people skills make her a hit with all our diners. Keely is currently the face you all see on your arrival. She is very professional and dedicated to her work and takes care of the day to day running of the business.",
    photo: '/images/team-keely.png',
    alt: 'Keely Oldham - Manageress',
    color: '#6B5E52',
  },
  {
    name: 'Tony Connor',
    role: 'Head Chef',
    tenure: '15 years',
    bio: "Tony has been with us now for 15 years and is our Head Chef. He has a vast experience in cheffing and we feel very lucky to have someone of Tony's talents and expertise working with us. Tony is a pleasure to work with and as chefs go, is of a calm nature.",
    photo: '/images/team-tony.png',
    alt: 'Tony Connor - Head Chef',
    color: '#4A5C7A',
  },
  {
    name: 'Kieran Thomas',
    role: 'Future Landlord',
    tenure: 'Born into it',
    bio: "Kieran is now 13 and even from an early age is showing that he wants to take over when his dad retires. He helps with all the outside catering and helps with all the deliveries.",
    photo: '/images/team-kieran.jpg',
    alt: 'Kieran Thomas',
    color: '#5C7A4A',
  },
]

export default function Team() {
  return (
    <div>
      <SEO path="/team" description="Meet the team at The Hanging Gate. Owner Mark Thomas has been at the helm for 35 years, with Keely, Tony and Kieran alongside him." image="/images/team-mark.png" />
      <PageHero title="Meet the Team" subtitle="The people who make The Hanging Gate special" />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {team.map(member => (
            <div key={member.name} style={{ backgroundColor: '#FAF7F2', border: '1px solid #E8DFD0', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ backgroundColor: member.color, padding: '28px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img
                  src={member.photo}
                  alt={member.alt}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    border: '2px solid rgba(255,255,255,0.3)',
                    flexShrink: 0,
                    backgroundColor: 'rgba(255,255,255,0.15)',
                  }}
                />
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', color: 'white', marginBottom: '2px' }}>{member.name}</h3>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>{member.role}</div>
                  <div style={{ color: '#E2C97E', fontSize: '12px', marginTop: '2px', fontWeight: 600 }}>{member.tenure}</div>
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <p style={{ color: '#4A3D34', fontSize: '14px', lineHeight: 1.8, fontStyle: 'italic' }}>
                  "{member.bio}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '56px', backgroundColor: '#F0EBE0', borderRadius: '8px', padding: '32px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', color: '#8B1A1A', marginBottom: '12px' }}>
            A family business — through and through
          </p>
          <p style={{ color: '#6B5E52', fontSize: '15px', lineHeight: 1.7 }}>
            From 1991 to today, The Hanging Gate has been run with passion, care and a commitment to making
            every guest feel at home. We look forward to welcoming you.
          </p>
        </div>
      </div>
    </div>
  )
}
