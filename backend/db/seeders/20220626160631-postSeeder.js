'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Posts', [
    {
      userId: 4,
      title: "Why Lebron is the GOAT",
      image: "",
      body: `LeBron Is More Clutch Than Jordan
      While the typical trends we've seen in the other statistical comparisons seem to continue here, the two players' level of improvement in clutch situations is incredibly different. Not only does LeBron win more than Jordan in areas of eliminating opponents and facing elimination, he also performs better. When LeBron has a chance to eliminate an opponent, he improves in points, blocks, steals, and rebounds. When he's facing elimination he improves in every major statistical category except for shooting percentages and turnovers. In fact, he averages over six more points and three more rebounds in those situations.

      By comparison, when Jordan has an opportunity to eliminate an opponent he improves in assists, blocks, and points. When facing elimination he improves in assists, rebounds, blocks, and points but none of the areas are significantly higher than his normal averages. He also loses more often than he wins in elimination games, only saving himself 41.6% of the time. LeBron James wins more in elimination circumstances by boasting a 58.3% win percentage. Wouldn't the more clutch player be significantly better in high-pressure situations and win more often in those situations?
      source: https://howtheyplay.com/team-sports/Proof-LeBron-James-is-the-Greatest-of-All-Time-GOAT`,

    },
    {
      userId: 5,
      title: "Steph Curry loves Golf",
      image: "",
      body: `There's a new golf tour that seeks to give talented players more opportunities to prove their abilities at some wonderful courses. The goal is to help grow the game by making it more inclusive.

      I'm talking, of course, about the Underrated Golf Tour.

      Thought I meant something else?

      Nope, this organization is actually interested in enriching the game, rather than a handful of individuals.

      The Underrated Golf Tour (UGT) is part of a larger brand backed by Stephen Curry, who just led his Golden State Warriors to their fourth NBA Championship title since 2015. When he's not on the court, Curry is usually found playing golf. He carries a handicap near scratch and is rapidly becoming one of the game's biggest advocates from the greater sports world.

      The UGT just wrapped its first event this week, held at Cog Hill Golf Club, just outside Chicago in Lemont, Ill. A total of 60 young boys and girls from diverse communities teed it up in the first of a four-tournament slate this summer. Other stops include Wickenburg Ranch (June 29-July 1), the Golf Club of Houston (July 17-19) and Innisbrook Resort's Copperhead Course (Aug. 8-10). The top 24 boys and girls will advance to the series-finale Curry Cup August 28-30 at TPC Harding Park in San Francisco, Calif. Perhaps the most radical aspect of these events: no entry fees.

      The UGT is not the basketball superstar's first foray into golf. In 2019, Curry stepped up to fund the golf programs at Howard University, one of America's great HBCUs. At a moment when what golf can do for individuals is making the biggest headlines, seeing what a grateful golfer is doing to enhance the game is a nice change of pace.

      source: https://www.golfpass.com/travel-advisor/articles/cool-golf-things-stephen-curry-underrated-golf-tour `,

    },
    {
      userId: 6,
      title: "2 Technologies that will change the world",
      image: "",
      body: `Artificial Intelligence
      Artificial intelligence, or AI, and machine learning refer to the ability of machines to learn and act intelligently, meaning they can make decisions, carry out tasks, and even predict future outcomes based on what they learn from data.

      AI and machine learning already play a bigger role in everyday life than you might imagine. Alexa, Siri, Amazon's product recommendations, Netflix’s and Spotify’s personalized recommendations, every Google search you make, security checks for fraudulent credit card purchases, dating apps, fitness trackers... All are driven by AI.

      AI is going to revolutionize almost every facet of modern life. Stephen Hawking said, “Success in creating AI would be the biggest event in human history.” And Hawking immediately followed that up with, “Unfortunately, it might also be the last, unless we learn how to avoid the risks."

      There are potentially huge risks for society and human life as we know it, particularly when you consider some countries are racing to develop AI-enabled autonomous weapons. AI and machine learning are the foundation on which many other technologies are built. For instance, without AI, we wouldn't have achieved the amazing advances in the Internet of Things, virtual reality, chatbots, facial recognition, robotics, automation, or self-driving cars, just to name a few.

      AI is also going to transform human jobs. AI-enabled automation will have a particularly significant impact and may lead to the displacement of many jobs. But rather than subscribing to a vision of a dystopian future where all human jobs are given over to robots, I believe AI will make our working lives better. AI will enhance the work of humans, and new jobs will arise to replace displaced jobs.

      What's more, as machines become more intelligent and capable of carrying out more human tasks, I believe that our uniquely human capabilities, things like creativity, empathy, and critical thinking, will become all the more precious and valuable in the workplaces of the future.


      Gene Technology
      Genomics is an interdisciplinary field of biology that focuses on the understanding and manipulation of DNA and genomes of living organisms. Gene editing is a group of technologies that enables genetic engineering in order to change the DNA and genetic structure of living organisms.

      Biotechnology is advancing to the point where it's viable to alter the DNA encoded within a cell; this will influence the characteristics or traits that its descendants will have. In plants, this could affect the number of leaves or their coloring, while in humans, it could affect their height, eye color, or their likelihood of developing diseases. This opens up a range of possibilities that are almost unlimited, as it means that any characteristic of a living organism that is inherited can theoretically be changed.

      Much of the work being done with gene editing is in the field of healthcare. Among the most exciting current projects is the correction of DNA mutations which can lead to serious illnesses such as cancer or heart disease. But, perhaps more than with any other technology, there are a huge number of ethical and legal concerns as well as "what if" questions when it comes to genetic manipulation and editing. Genome editing in humans is currently banned in many countries, including much of Europe, as its long-term results are not understood.

      With anything as potentially transformative to society as genomics, it can be easy to get carried away thinking about possibilities such as wiping out cancer or even indefinitely prolonging human life. In reality, such huge advances are likely to be a long way away, if they are ever possible at all. Focusing on solving smaller problems that will have an immediate real-world impact is likely to be more fruitful in the short term.

      source: https://www.forbes.com/sites/bernardmarr/2022/02/07/the-5-technologies-that-will-change-the-future-of-the-human-race/?sh=414bd5da8f1c`,

    },
    {
      userId: 7,
      title: "Facts about Slovenia",
      image: "",
      body: `
      In the Heart of Europe
      Where the Alps meet the Mediterranean and the Pannonian Plain meets the Karst, there is Slovenia. This small green country extends in the area of 20,273 km2. It is one of the countries with an exceptional number of top athletes and rich cultural creation. In Slovenia it is not difficult to compare the value of goods and services, as they are priced in one of the most important world currencies... in euros.

      In Numbers
      Population: 2.107.180 (1, 2022)
      Position: Slovenia is a Central European country.
      Area: 20,273 km2
      Government: Slovenia is a democratic republic founded on the principle of the separation of powers into legislative, executive and judicial power.
      Capital city: Ljubljana, population: 293.218 (1, 2022).
      President of the Republic: Borut Pahor
      Prime Minister: dr. Robert Golob
      President of the National Assembly: mag. Urška Klakočar Zupančič
      International affiliations: Slovenia has been a member of the European Union since 1 May 2004 and a member of NATO since 7 April 2004. It is also a member of many other international organisations.
      Administrative division: 58 administrative units, 212 municipalities.
      Other major cities: Maribor, Kranj, Celje, Koper, Novo mesto, Velenje, Murska Sobota.
      Official language: Slovenian, also Hungarian and Italian in their respective ethnically mixed areas
      Religion: The majority of the population is Roman Catholic; Slovenia also has 40 other officially registered religious communities.
      Currency: euro (EUR), valid since 1 January 2007.
      GDP per capita (in EUR): EUR 24.678 (2021)
      Registered unemployment rate: 4,3 % (1, 2022)
      Average age: 43,8 years (1, 2022)
      Life expectancy: men 78 years, women 83 years
      Average number of children born per woman: 1.6 (2022)
      Climate: Alpine, Pannonian, Mediterranean
      Time: Central European Time GMT + 1, in summer GMT + 2
      Average temperatures: July 21°C, January 0°C
      Mains voltage: 230 V
      Units of measurement: metric = metres, kilometres, grams, kilograms. Temperatures are expressed in degrees Celsius.
      Length of borders: 330 km with Austria , 280 km with Italy, 102 km with Hungary and 670 km with Croatia; in total 1,382 km
      Length of coastline: 46.6 km
      Highest peak: Triglav, 2,864 m
      Geometric centre of Slovenia: Vače
      Average height above sea level: 556.8 m
      Universities: Ljubljana, Maribor and Primorska .

      source: https://www.slovenia.info/en/plan-your-trip/facts-about-slovenia
      `,

    },
    {
      userId: 8,
      title: "Early life and summary of Giannis",
      image: "",
      body: `Giannis Sina Ugo Antetokounmpo (born December 6, 1994)is a Greek-Nigerian professional basketball player for the Milwaukee Bucks of the National Basketball Association (NBA). Antetokounmpo's country of origin, in addition to his size, speed, strength, and ball-handling skills have earned him the nickname "Greek Freak".

      Born and raised in Athens to Nigerian immigrants, Antetokounmpo began playing basketball for the youth teams of Filathlitikos in Athens. In 2011, he began playing for the club's senior team before entering the 2013 NBA draft, where he was selected 15th overall by the Bucks. In 2016 to 2017 he led the Bucks in all five major statistical categories and became the first player in NBA history to finish a regular season in the top 20 in all five statistics of total points, rebounds, assists, steals, and blocks. He received the Most Improved Player award in 2017. Antetokounmpo has received six All-Star selections, including being selected as an All-Star captain in 2019 and 2020, as he led the Eastern Conference in voting in these two years.

      One of basketball's most decorated players, Antetokounmpo won consecutive NBA Most Valuable Player Awards in 2019 and 2020, joining Kareem Abdul-Jabbar and LeBron James as the only players in NBA history to win two MVPs before turning 26. Along with his MVP award, he was also named the NBA Defensive Player of the Year in 2020, becoming only the third player after Michael Jordan (1988) and Hakeem Olajuwon (1994) to win both awards in the same season. In 2021, Antetokounmpo led the Bucks to their first NBA championship since 1971 and was named Finals MVP. The same year, he was honored as one of the league's greatest players of all-time by being named to the NBA 75th Anniversary Team

      Early life
      Giannis Sina Ugo Adetokunbo was born in Athens, Greece, on December 6, 1994, the son of immigrants from Nigeria. Three years earlier, his parents had moved from Lagos, leaving their firstborn son, Francis, under the care of his grandparents. Adetokunbo grew up in the Athens neighborhood of Sepolia. His parents, as immigrants, could not easily find work, so Giannis and his older brother, Thanasis, helped by hawking watches, handbags and sunglasses in the streets. In 2007, Adetokunbo started playing basketball.

      Although Adetokunbo and three of his four brothers were born in Greece, they did not automatically receive Greek citizenship as Greek nationality law follows jus sanguinis. For the first 18 years of his life, Adetokunbo could not travel outside the country and was effectively stateless, having no papers from Greece or Nigeria. He was eventually issued Greek citizenship on May 9, 2013, less than two months before the 2013 NBA Draft.

      After gaining Greek citizenship in 2013, his official surname became Αντετοκούνμπο, the Greek transcription of Adetokunbo, which was then transliterated letter-for-letter and officially spelled on his Greek passport as Antetokounmpo. Giannis is the colloquial for the Gr. Ioannis (John). Because many could not pronounce his surname, he quickly became known as the "Greek Freak". Antetokounmpo also holds Nigerian citizenship, having received his Nigerian passport in 2015, and as such possesses dual citizenship.

      source: https://en.wikipedia.org/wiki/Giannis_Antetokounmpo
      `,

    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Posts', null, {});
  }
};
