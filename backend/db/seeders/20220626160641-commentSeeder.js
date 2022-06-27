'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Comments', [
    {
      userId: 7,
      postId: 1,
      body: `I agree 100%... Lebron is the GOAT!!!`
    },
    {
      userId: 5,
      postId: 1,
      body: `As biased as I am the facts are undeniable. Great article. Hope Steph joins him one day!!`
    },
    {
      userId: 4,
      postId: 2,
      body: `Golf is very boring but its good to see Steph do this. Looks very promising.`
    },
    {
      userId: 6,
      postId: 2,
      body: `Steph needs to stop worrying about golf and focus more on his basketball game.`
    },
    {
      userId: 4,
      postId: 3,
      body: `Really cool articles on technology and the future. Kind of scary stuff!! Excited but nervous to see how this all plays out.`
    },
    {
      userId: 5,
      postId: 3,
      body: `Love this article! Appreciate the author for putting all this information out there. Keep up the good work!!!`
    },
    {
      userId: 4,
      postId: 4,
      body: `Looks like a very fun place to visit. Plus one of my favorite NBA players Luka is from there :) `
    },
    {
      userId: 8,
      postId: 4,
      body: `Would love to visit. Traveling is very important to me and I have a history with Europe myself.`
    },
    {
      userId: 7,
      postId: 5,
      body: `Inspiring origin story about Giannis. Shoutout to european NBA players!`
    },
    {
      userId: 6,
      postId: 5,
      body: `Love the story of Giannis but I dont think hes that good. Needs to show me more.`
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Comments', null, {});
  }
};
