import React, { Component } from 'react';
import Slider from 'react-slick'
import Layout from './Layout';

class AthleteBio extends Component {
  constructor(props) {
    super();
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <Layout>
        <div className="content-wrap">
          <div className="container">
            <h1>Athlete Bio</h1>
            <hr />
            <Slider {...settings}>
              <div><img src="http://victoroladipo.com/wp-content/uploads/2017/10/victor-olapido-pacers-in-action-1000x631.jpg" className="full-width margin-bottom" /></div>
              <div><img src="http://victoroladipo.com/wp-content/uploads/2017/10/vo-the-athlete-bio.jpg" className="full-width margin-bottom" /></div>
            </Slider>
            <br />
            <hr />
            <h3>Professional History</h3>
            <br />
            <p>
                <strong>CAREER AVERAGES</strong> <br />
                Appeared in 224 games (167 starts) and averaged 15.9 points, 4.4 rebounds, 4.0 assists and 1.6 steals in 21.4 minutes.
            </p>
            <p>
                <strong>2015-16 SEASON AVERAGES</strong> <br />
                Appeared in 72 games (52 starts) with Orlando, averaging 16.0 points, 4.8 rebounds, 3.9 assists and 1.61 steals in 33.0 minutes.
            </p>
            <p>
                <strong>2015-16</strong> <br />
                Shot a career-high .830 (205-247) from the free throw line. Ranked 19th in the NBA in steals and tied for 38th in minutes played. Became just the third player since 1985-86 to begin his NBA career with 1,100+ points, 110+ steals and 70+ three-point field goals made in three straight seasons. Led (or tied) the team in scoring 20 times, in rebounding seven times and in assists 15 times. Scored in double figures 60 times, had 20+ points 18 times and had 30+ points twice, including a career-high 45 points (16-22 FG, 6-7 3FG, 7-8 FT) on 3/18 vs. Cleveland. Set all-time mark for most points scored by a Magic player against Cleveland and became the seventh player in team history to score 45+ points in a game. Connected on a career-high six threepointers on 1/8 at Brooklyn (6-of-8 3FG) and 3/18 vs. Cleveland (6-of-7 3FG). Had triple-double (second of career) on 10/30 vs. Oklahoma City with 21 points, a careerhigh-tying 13 rebounds and 10 assists. Had three double-doubles. Pulled down a careerhigh-tying 13 rebounds on 2/19 vs. Dallas. Recorded at least one steal 57 times and had two-or-more steals 32 times, including a career-high-tying five steals four times, the last on 4/1 at Milwaukee. Recorded at least one blocked shot 35 times and had two-ormore blocked shots 12 times, including a career-high four blocks on 12/8 at Denver and 4/1 at Milwaukee. Missed ten total games due to injury – missed five games due to a concussion, two games due to a sprained right knee, one game due to a low back contusion and two games due to a sore right wrist.
            </p>
            <p>
                <strong>NBA CAREER</strong> <br />
                2014-15: Played in 72 games (71 starts) with Orlando, averaging a career-high 17.9 points, 4.2 rebounds, 4.1 assists and 1.67 steals in a team-high and career-high 35.7 minutes, while shooting a team-best .819 (262-320) from the free throw line. As a starter, averaged 18.0 points, 4.2 rebounds, 4.1 assists and 1.69 steals in 35.9 minutes. Tied for eighth in the NBA in minutes played, ranked 16th in steals, 21st in scoring and tied for 36th in assists. Led (or tied) the team in scoring a team-best 31 times, in rebounding once and in assists 18 times. Scored in double figures 67 times, had 20+ points 26 times and had 30+ points five times, including 38 points on 3/4 vs. Phoenix. Hit eventual gamewinning free throw with 6.6 seconds left on 12/29 at Miami. Had game-winning layup with 1.5 seconds remaining on 4/8 vs. Chicago. Recorded three double-doubles. Pulled down a career-high-tying 13 rebounds on 2/25 vs. Miami. Dished out a season-high 10 assists on 3/6 vs. Sacramento. In same game, tallied 32 points and five steals, becoming only second player in the NBA this season with 30+ points, 10+ assists and five-plus steals in same game (Westbrook). Also became just the second player in Magic history with 30+ points, 10+ assists and five-plus steals in same game (Armstrong, Nov. 24, 1999). Recorded at least one steal 62 times and two-or-more steals 38 times, including a career-high-tying five steals on 3/6 vs. Sacramento. During 2015 NBA All-Star Weekend, tallied a team-high-tying 22 points, four assists, three rebounds and team-hightying four steals for the United States during the BBVA Compass Rising Stars Challenge. Also finished second in the Sprite Slam Dunk contest to Minnesota’s Zach Lavine. Missed ten games due to injury: missed nine games due to a facial fracture and once due to a sore right Achilles.
                2013-14: Played in 80 games (44 starts) during his rookie campaign with Orlando, averaging 13.8 points, 4.1 rebounds, 4.1 assists and a team-high 1.61 steals in 31.1 minutes. As a starter, averaged 14.7 points, 4.6 rebounds, 4.5 assists and 1.93 steals in 35.5 minutes. Tied for 15th in the NBA in steals. Also ranked among all NBA rookies in scoring (2nd), rebounding (T-8th), assists (3rd), FG percentage (.419, 8th), three-point FG percentage (.327, T-7th), FT percentage (.780, 6th), steals (2nd) and minutes played (3rd). Named to the 2013-14 NBA All-Rookie First Team. Named NBA’s Rookie of the Month for both December 2013 and February 2014. Became just the second rookie in Magic history with 1,000+ points, 300+ assists and 100+ steals in a season (Hardaway). Led (or tied) the team in scoring 13 times, in rebounding twice and in assists 18 times. Scored in double figures 62 times had 20+ points 12 times and 30+ points twice, including 35 points on 1/15 vs. Chicago. Became the first Magic rookie to have 35+ points and eight-plus assists in the same game on 1/15 vs. Chicago. Also logged a career-high 57 minutes in the same game, the most ever by a Magic rookie and the most by an NBA rookie since Feb. 22, 1954. On 2/21 vs. New York, recorded 30 points and a career-high 14 assists, becoming just the fourth NBA rookie over the last 20 years with 30+ points and 14+ assists in the same game (Kidd, Iverson, Francis). Recorded first tripledouble of NBA career on 12/3 at Philadelphia with 26 points, 10 rebounds and 10 assists in 52 minutes. Had six double-doubles. Tallied double figures in rebounding three times. Dished out 10+ assists in six games. Had at least one steal in 66 games and two-ormore steals 38 times, including a career-high five steals four times, the last time on 2/23 at Toronto. Had at least one blocked shot 27 times and two-or-more blocks eight times. Participated in the 2014 BBVA Rising Stars Challenge at NBA All-Star Weekend, tallying 13 points, four assists and one rebound in 20 minutes. Also participated in the Taco Bell Skills Challenge with Philadelphia’s Michael Carter-Williams, finishing in second place just 0.1 seconds behind the winning time. Made his NBA debut on 10/29 at Indiana, tallying 12 points, three rebounds, two assists and one steal in 23 minutes. Scored first NBA points on a three-pointer (first shot attempt) with 2:57 left in the first quarter. Made first NBA start on 11/20 vs. Miami, recording 20 points, four rebounds, two assists, five steals and two blocks in 36 minutes. Missed two games due to a sore left ankle.
            </p>
            <p>
                <strong>COLLEGE</strong> <br />
                Appeared in 104 career games at Indiana University, averaging 10.7 points, 5.2 rebounds, 1.7 assists and 1.55 steals in 24.6 minutes and shot .538 (406-754) from the field during his collegiate career…Ranks third in IU history in career steals (161) and scored 1,117 points with the Hoosiers.
                2012- 13 (Junior): Played and started in all 36 games, averaging 13.6 points, 6.3 rebounds, 2.1 assists and 2.17 steals in 28.4 minutes while shooting .599 (182-304) from the field and .441 (30-68) from three-point range. Helped the Hoosiers reach their second straight trip to the NCAA Sweet Sixteen and Indiana’s first outright Big Ten regular season championship since 1993. Set an Indiana single-season record in steals (78) while leading the Big Ten in field goal percentage and steals. Named First Team All-American by The Associated Press, The Sporting News and the NABC, earned The Sporting News National Player of the Year, and was named Big Ten Defensive Player of the Year. Also a finalist for the Wooden Award and the Oscar Robertson Trophy, given to the National Player of the Year. Scored in double figures 30 times, including a career-high 26 points on 2/10 at Ohio State.
                2011-12 (Sophomore): Appeared in 36 games (34 starts), averaging 10.8 points, 5.3 rebounds, 2.0 assists and 1.36 steals in 26.7 minutes. Earned Big Ten All-Defensive Team honors and was named Honorable Mention All-Big Ten. Finished eighth in the conference in steals.
                2010-11 (Freshman): Played in 32 games (five starts), averaging 7.4 points, 3.7 rebounds and 1.06 steals in 18.0 minutes, while shooting .547 from the field.
            </p>
            <p>
                <strong>PERSONAL</strong> <br />
                Son of Chris and Joan Oladipo. Has three sisters, Kristine, Kendra and Victoria, who is his twin. Chosen to the 2014 USA Men’s Select Team. Was a sports communications/ broadcast major at Indiana. Recognized for his tremendous efforts in the Central Florida community as the winner of the Rich and Helen DeVos Community Enrichment Award in both 2015 (co-winner with Tobias Harris) and 2016. Served Thanksgiving breakfast to residents at the Coalition for the Homeless in 2015. Surprised an underprivileged Central Florida family with a KIA car during the 2015 holidays. Hosted a holiday party in 2015 for hearing impaired youth and their families at the UCF Listening Center. Assisted the Magic and UnitedHealthcare staff in assembling 12,500 Hi-Five Kids Packs for Second Harvest Food Bank in 2016. During the summer of 2014, hosted an Orlando Magic youth basketball camp. Played high school basketball at famed DeMatha High School, which has produced 13 NBA players, including Adrian Dantley, Danny Ferry, Sidney Lowe and former Magic swingman Keith Bogans. Enjoys to sing and watch movies during his spare time. Fan of the NFL’s Washington Redskins.
          </p>
          </div>
        </div>
      </Layout> 
    );
  }
}

export default AthleteBio;
