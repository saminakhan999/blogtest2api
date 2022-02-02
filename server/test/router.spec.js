const request = require('supertest');
const app = require('../app.js');
const dayjs = require("dayjs");
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
const Fuse = require('fuse.js')


// GET

describe('GET all blog posts', () => {

    test('responds with correct data', (done) => {
        request(app)
        .get('/blog')
        .expect({
            "1":{
            "blogtitle": "Ostriches don't exist",
            "blogcontent": "Scientists recently discovered that ostriches are just a large form of pigeon. They share 99.9% of the same genes apart from the gene for height. Up until 100 years ago ostriches didn't exist, it wasn't until a family of pigeons snuck onto an EasyJet flight to Africa. On the flight one of them had its head stuck out of the window causing it to get stretched extensively resulting in the ostrich-like appearance we're familiar with today. \n \n How has this only just been discovered? \n This was only discovered recently as very few people ever actually saw a pigeon in Africa, and it wasn’t until a few months ago that researchers came across diary entries noting their arrival. Upon their migration to the warmer continent they immediately strived for cooler temperatures resulting in them teaching themselves to burrow into the ground. Pigeons, being pigeons, learned this skill incredibly quickly - it’s estimated that only a few months later they had already created a few miles of underground tunnels solely for their benefit. In current times it’s estimated that there are over a hundred miles of underground networks consisting of tunnels as tall as… well… ostriches!    \n The evolution. \n Over time pigeons lost their ability of flight due to living almost exclusively underground. As a side note, it is a little known fact that African plains have the highest concentration of worms per square meter of any location on the planet. Thus the pigeon’s food source was plentiful, and the surplus allowed for an immense amount of breeding and growth. Gradually their feathers thickened and expanded allowing them to cope with the insane climate by storing water in pouches beneath their feathers. Their bodies also expanded due to the excessive volume of worms consumed and any pigeons born due to the long-necked pigeon inherited this magnificent elongation meaning the pigeons had now grown to a mighty 4 feet. In fact, this appearance is almost identical to the common appearance of ostriches we are used to today and these were actually the first instances of pigeons to be spotted in Africa… appearing to be an entirely different race of bird. \n Now you might think, \n 'How have people not noticed that ostriches have gotten SO much bigger over time?' \n Well, the simple answer is that humans used to be smaller too. So as we grew it didn’t look like the pigeons were getting any bigger. It was unnoticeable. I believe this alone is evidence that pigeons are the sneakiest animals on the planet. \n Pigeon or Ostrich \n Now there comes the question of 'what do we call these animals?'. Do we keep referring to the majestic birds as ostriches or do we start to refer to them by their original names – the true names of the animals behind the 8ft façade – the pigeon. In all truth, I don’t believe it makes any difference. Time tells us that there is no difference between the birds, they are one in the same. I think they are deserving of both names and regardless of what we call them this should be known as the greatest feat of evolution in all of time.",
            "timestamp": "29/01/2022 11:45:33",
            "gif": "https://media4.giphy.com/media/l1J9znYNISr0aEmze/giphy.webp?cid=112e516bj583yd2p34cuzg3zsicfoeokijom4c68tw0zkjvu&rid=giphy.webp&ct=g",
            "comment": {"1":{
                "blogcomment": "That awkward moment when you find out that you don't exist... -Ostrich",
                "timestamp": "29/01/2022 11:48:37"
            }, "2":{
                "blogcomment": "Haha nice try! I bet next time you'll say that chairs don't exist...",
                "timestamp": "29/01/2022 12:22:07"
            }},
            "emoji": {"1":{"emojiCount": 231 }, "2":{"emojiCount": 175}, "3":{"emojiCount": 98}}
            },
        
        
            "2":{
            "blogtitle": "Are Aliens real?",
            "blogcontent": "I never thought Aliens could be real.  I thought 'how stupid could someone be to believe there is something non-human actually out there'. Well, I take it all back. They definitely might exist. \n I thought that the older I got the more ignorant I would get. I almost believed that something completely inexplainable could happen to me, but I would just figure, 'Hey… there is probably a valid reason for that!'. Now. As a 18 year old boy. I don’t have the will to believe any different. \n I have lived these 18 years of my life as a completely ordinary kid. I lived in a small house in Sheffield with my mum, my older brother, and his twin sister. Nothing even remotely remarkable had happened. Nothing extraordinary. Nothing so significant it would make me reconsider my very existence. That was until last Tuesday. \n I had been for a night out with my mates from school and stepped out of the taxi in front of my house at about 3am. It was a cold night, and I wasn’t too keen to stand outside for longer than I needed to. However, when I got to the door, I realised I had forgotten to take a key with me. Luckily my mum wasn’t home, so I didn’t have to risk her wrath by knocking on the door at 3am. I pounded on the door to wake my brother or my sister. As I did the door swung back – already open. I didn’t think anything of it. I assumed someone had just forgotten to lock the door… likely me. \n Next, I closed the door and started up the stairs. \n For context, our house was a 3 bedroom semi-detached. Directly at the top of the stairs was my bedroom, immediately to the left was my mums – currently empty – and looping back at the end of the landing was my brother and sister’s room. They voluntarily shared so that I could get a room to myself. \n This is where is gets unexplainable. \n I see a huge green flash under my sibling’s door. At the same time I hear a scream and the smash of a window. I ran over to the room and threw myself inside. \n I’m stood in the middle of the room. \n There is no smashed window. \n No mess at all. \n But, in the bottom bunk of the bed, no sister. \n I stand there shouting for my brother to wake up. I start punching him until he gets up and screamed until he had climbed off the top bunk and was stood next to me. He looked very confused. \n I shouted, 'Where is she?!' \n  He yawned, 'who?'. \n THIS. Is where it gets weird. \n I didn’t know what to say. I just stared at him equally confused. \n Eventually I said, 'our sister…?'. \n All he said was, 'what sister?'. \n  He told me that I’m drunk and to stop being crazy and dragged me to my room. \n WHAT HAPPENED? \n This much was obvious. He was lying. He was playing a prank on me. He was responsible for the lights. He was responsible for the noise. My sister must have gone elsewhere for the night. \n  The next morning my mum got home. She was stood in the kitchen as my brother and I were making breakfast. 'Where was Susu last night?' - that’s what I called my sister. 'What are you talking about?', she asked. 'Where was Susu?', I reiterated. 'What are you on about, who is Susu?', she said. \n  ¿Que? \n 'Our sister?'. \n 'Stop being ridiculous, I’m exhausted.'. She turned to look at my brother. 'Why does he think he has a sister?'. \n What?! \n My mum leaves the room, and my brother stands there looking at me confused. \n WHAT HAPPENED? \n I can’t think of any justifiable reason that could explain what had happened. I know what I saw. I know what I heard. I wasn’t even drunk anymore. THIS was unexplainable. I have no suggestions. ",
            "timestamp": "30/01/2022 10:34:46",
            "gif": "https://media2.giphy.com/media/gHcPh3ehbRGik/giphy.webp?cid=112e516bpll6jg8e3bkezhdzjedxlzxfr7z4eyle2f9fub23&rid=giphy.webp&ct=g",
            "comment": {"1":{
                "blogcomment": "OMG I thought I was the only one!",
                "timestamp": "30/01/2022 11:07:55"
                
            }, "2":{
                "blogcomment": "The same thing happened to me too. Join the Alien Believers Society for support!",
                "timestamp": "30/01/2022 11:55:44"
            }},
            "emoji": {"1":{"emojiCount": 167 }, "2":{"emojiCount": 134}, "3":{"emojiCount": 122}}
            },
        
            "3":{ 
            "blogtitle": "My brother believes in Aliens",
            "blogcontent": "...",
            "timestamp": "31/01/2022 12:04:22",
            "gif": "https://media0.giphy.com/media/3oEjI789af0AVurF60/giphy.webp?cid=112e516bf9nnnymdnva57g1ze6cg1c5uj0eje4wjqf2jm5qm&rid=giphy.webp&ct=g",
            "comment": {"1":{
                "blogcomment": "Ratio",
                "timestamp": "31/01/2022 12:12:12"
            }, "2":{
                "blogcomment": "It's true I do!!!",
                "timestamp": "31/01/2022 12:17:10"
            }},
            "emoji": {"1":{"emojiCount": 160 }, "2":{"emojiCount": 133}, "3":{"emojiCount": 276}}
            }
        }, done)
    });

    test('responds with json', (done) => {
        request(app)
        .get('/blog')
        .expect('Content-Type', /json/, done)
    });

    test('responds with status code 200', (done) => {
        request(app)
        .get('/blog')
        .expect(200, done)
    });


});




describe('GET specific blog post', () => {

    test('responds with correct data', (done) => {
        request(app)
        .get('/blog/3')
        .expect({ 
            "blogtitle": "My brother believes in Aliens",
            "blogcontent": "...",
            "timestamp": "31/01/2022 12:04:22",
            "gif": "https://media0.giphy.com/media/3oEjI789af0AVurF60/giphy.webp?cid=112e516bf9nnnymdnva57g1ze6cg1c5uj0eje4wjqf2jm5qm&rid=giphy.webp&ct=g",
            "comment": {"1":{
                "blogcomment": "Ratio",
                "timestamp": "31/01/2022 12:12:12"
            }, "2":{
                "blogcomment": "It's true I do!!!",
                "timestamp": "31/01/2022 12:17:10"
            }},
            "emoji": {"1":{"emojiCount": 160}, "2":{"emojiCount": 133}, "3":{"emojiCount": 276}}
            }, done)
    });

    test('responds with json', (done) => {
        request(app)
        .get('/blog/3')
        .expect('Content-Type', /json/, done)
    });

    test('responds with status code 200', (done) => {
        request(app)
        .get('/blog/3')
        .expect(200, done)
    });

    test('if id unknown responds with status code 404', (done) => {
        request(app)
        .get('/blog/100')
        .expect(404, done);
    });

});


describe('GET all comments from a blog post', () => {

    test('responds with correct data', (done) => {
        request(app)
        .get('/blog/1/comment')
        .expect({"1":{
            "blogcomment": "That awkward moment when you find out that you don't exist... -Ostrich",
            "timestamp": "29/01/2022 11:48:37"
        }, "2":{
            "blogcomment": "Haha nice try! I bet next time you'll say that chairs don't exist...",
            "timestamp": "29/01/2022 12:22:07"
        }}, done)
    });

    test('responds with json', (done) => {
        request(app)
        .get('/blog/1/comment')
        .expect('Content-Type', /json/, done)
    });

    test('responds with status code 200', (done) => {
        request(app)
        .get('/blog/1/comment')
        .expect(200, done)
    });

    test('if id unknown responds with status code 404', (done) => {
        request(app)
        .get('/blog/5/comment')
        .expect(404, done);
    });

});



describe('GET individual comments from blog post', () => {

    test('responds with correct data', (done) => {
        request(app)
        .get('/blog/1/comment/1')
        .expect({
            "blogcomment": "That awkward moment when you find out that you don't exist... -Ostrich",
            "timestamp": "29/01/2022 11:48:37"
        }, done)
    });

    test('responds with json', (done) => {
        request(app)
        .get('/blog/1/comment/1')
        .expect('Content-Type', /json/, done)
    });

    test('responds with status code 200', (done) => {
        request(app)
        .get('/blog/1/comment/1')
        .expect(200, done)
    });

    test('if id unknown responds with status code 404', (done) => {
        request(app)
        .get('/blog/2/comment/200')
        .expect(404, done);
    });

});


describe('GET Emoji from blog', () => {

    test('responds with correct data', (done) => {
        request(app)
        .get('/blog/2/emoji/2')
        .expect( { emojiCount: 134 }, done)
    });

    test('responds with json', (done) => {
        request(app)
        .get('/blog/2/emoji/2')
        .expect('Content-Type', /json/, done)
    });

    test('responds with status code 200', (done) => {
        request(app)
        .get('/blog/2/emoji/2')
        .expect(200, done)
    });

    test('if id unknown responds with status code 404', (done) => {
        request(app)
        .get('/blog/2/emoji/100')
        .expect(404, done);
    });

});


describe('GET search function', () => {

    test('responds with correct data', (done) => {
        request(app)
        .get('/search?q=ostrich')
        .expect({
            "item": {
              "blogtitle": "Ostriches don't exist",
              "blogcontent": "Scientists recently discovered that ostriches are just a large form of pigeon. They share 99.9% of the same genes apart from the gene for height. Up until 100 years ago ostriches didn't exist, it wasn't until a family of pigeons snuck onto an EasyJet flight to Africa. On the flight one of them had its head stuck out of the window causing it to get stretched extensively resulting in the ostrich-like appearance we're familiar with today. \n \n How has this only just been discovered? \n This was only discovered recently as very few people ever actually saw a pigeon in Africa, and it wasn’t until a few months ago that researchers came across diary entries noting their arrival. Upon their migration to the warmer continent they immediately strived for cooler temperatures resulting in them teaching themselves to burrow into the ground. Pigeons, being pigeons, learned this skill incredibly quickly - it’s estimated that only a few months later they had already created a few miles of underground tunnels solely for their benefit. In current times it’s estimated that there are over a hundred miles of underground networks consisting of tunnels as tall as… well… ostriches!    \n The evolution. \n Over time pigeons lost their ability of flight due to living almost exclusively underground. As a side note, it is a little known fact that African plains have the highest concentration of worms per square meter of any location on the planet. Thus the pigeon’s food source was plentiful, and the surplus allowed for an immense amount of breeding and growth. Gradually their feathers thickened and expanded allowing them to cope with the insane climate by storing water in pouches beneath their feathers. Their bodies also expanded due to the excessive volume of worms consumed and any pigeons born due to the long-necked pigeon inherited this magnificent elongation meaning the pigeons had now grown to a mighty 4 feet. In fact, this appearance is almost identical to the common appearance of ostriches we are used to today and these were actually the first instances of pigeons to be spotted in Africa… appearing to be an entirely different race of bird. \n Now you might think, \n 'How have people not noticed that ostriches have gotten SO much bigger over time?' \n Well, the simple answer is that humans used to be smaller too. So as we grew it didn’t look like the pigeons were getting any bigger. It was unnoticeable. I believe this alone is evidence that pigeons are the sneakiest animals on the planet. \n Pigeon or Ostrich \n Now there comes the question of 'what do we call these animals?'. Do we keep referring to the majestic birds as ostriches or do we start to refer to them by their original names – the true names of the animals behind the 8ft façade – the pigeon. In all truth, I don’t believe it makes any difference. Time tells us that there is no difference between the birds, they are one in the same. I think they are deserving of both names and regardless of what we call them this should be known as the greatest feat of evolution in all of time.",
              "timestamp": "29/01/2022 11:45:33",
              "gif": "https://media4.giphy.com/media/l1J9znYNISr0aEmze/giphy.webp?cid=112e516bj583yd2p34cuzg3zsicfoeokijom4c68tw0zkjvu&rid=giphy.webp&ct=g",
              "comment": {
                "1": {
                  "blogcomment": "That awkward moment when you find out that you don't exist... -Ostrich",
                  "timestamp": "29/01/2022 11:48:37"
                },
                "2": {
                  "blogcomment": "Haha nice try! I bet next time you'll say that chairs don't exist...",
                  "timestamp": "29/01/2022 12:22:07"
                }
              },
              "emoji": {
                "1": {
                  "emojiCount": 231
                },
                "2": {
                  "emojiCount": 175
                },
                "3": {
                  "emojiCount": 98
                }
              }
            },
            "refIndex": 0}, done)
    });

    test('responds with json', (done) => {
        request(app)
        .get('/search?q=ostrich')
        .expect('Content-Type', /json/, done)
    });

    test('responds with status code 200', (done) => {
        request(app)
        .get('/search?q=ostrich')
        .expect(200, done)
    });


});


//POST 


describe('POST Create a blog post', () => {

    test('responds with correct data', (done) => {
        request(app)
        .post('/blog')
        .send({
            "blogtitle": "this is a create blog title test",
            "blogcontent": "this is a create blog content test"
          })
        .expect({
            blogtitle: "this is a create blog title test",
            blogcontent: "this is a create blog content test",
            timestamp: dayjs().format('DD/MM/YYYY ' + 'hh:mm:ss').toString(),
            comment: "",
            emoji: {
              "1": {
                "emojiCount": 0
              },
              "2": {
                "emojiCount": 0
              },
              "3": {
                "emojiCount": 0
              }
            }
          }, done)
    });

    test('responds with json', (done) => {
        request(app)
        .post('/blog')
        .send({
            blogtitle: "this is a create blog title test",
        blogcontent: "this is a create blog content test"
          })
        .expect('Content-Type', /json/, done)
    });

    test('responds with status code 200', (done) => {
        request(app)
        .post('/blog')
        .send({
            blogtitle: "this is a create blog title test",
            blogcontent: "this is a create blog content test"
          })
        .expect(201, done)
    });

    test('if no requested title or content responds with status code 404', (done) => {
        request(app)
        .post('/blog')
        .send({
          })
        .expect(404, done);
    });

});


describe('POST Create a comment', () => {

    test('responds with correct data', (done) => {
        request(app)
        .post('/blog/3')
        .send({blogcomment: "this is a create blog comment test"})
        .expect({
            blogcomment: "this is a create blog comment test",
            timestamp: dayjs().format('DD/MM/YYYY ' + 'hh:mm:ss').toString()
          }, done)
    });

    test('responds with json', (done) => {
        request(app)
        .post('/blog/3')
        .send({blogcomment: "this is a create blog comment test"})
        .expect('Content-Type', /json/, done)
    });

    test('responds with status code 200', (done) => {
        request(app)
        .post('/blog/3')
        .send({blogcomment: "this is a create blog comment test"})
        .expect(201, done)
    });

    test('if no requested comment responds with status code 404', (done) => {
        request(app)
        .post('/blog/3')
        .send({
          })
        .expect(404, done);
    });

});



// PATCH 

describe('PATCH Edit a blog post', () => {

    test('responds with correct data', (done) => {
        request(app)
        .patch('/blog/2')
        .send({blogcontent: "this is a blog content test", blogtitle: "this is a blog title test"})
        .expect({
            blogtitle: 'this is a blog title test',
            blogcontent: 'this is a blog content test',
            timestamp: '30/01/2022 10:34:46',
            gif: 'https://media2.giphy.com/media/gHcPh3ehbRGik/giphy.webp?cid=112e516bpll6jg8e3bkezhdzjedxlzxfr7z4eyle2f9fub23&rid=giphy.webp&ct=g',
            comment: {"1":{
                "blogcomment": "OMG I thought I was the only one!",
                "timestamp": "30/01/2022 11:07:55"
                
            }, "2":{
                "blogcomment": "The same thing happened to me too. Join the Alien Believers Society for support!",
                "timestamp": "30/01/2022 11:55:44"
            }},
            emoji: {
              '1': { emojiCount: 167 },
              '2': { emojiCount: 134 },
              '3': { emojiCount: 122 }
            }
          }, done)
    });

    test('responds with json', (done) => {
        request(app)
        .patch('/blog/2')
        .send({blogcontent: "this is a blog content test", blogtitle: "this is a blog title test"})
        .expect('Content-Type', /json/, done)
    });

    test('responds with status code 200', (done) => {
        request(app)
        .patch('/blog/2')
        .send({blogcontent: "this is a blog content test", blogtitle: "this is a blog title test"})
        .expect(200, done)
    });

});

describe('PATCH Edit a comment', () => {

    test('responds with correct data', (done) => {
        request(app)
        .patch('/blog/1/comment/1')
        .send({blogcomment: "this is a blog comment test"})
        .expect({
            "blogcomment": "this is a blog comment test",
            "timestamp": "29/01/2022 11:48:37"
          }, done)
    });

    test('responds with json', (done) => {
        request(app)
        .patch('/blog/1/comment/1')
        .send({blogcomment: "this is a blog comment test"})
        .expect('Content-Type', /json/, done)
    });

    test('responds with status code 200', (done) => {
        request(app)
        .patch('/blog/1/comment/1')
        .send({blogcomment: "this is a blog comment test"})
        .expect(200, done)
    });

});


describe('PATCH Increase the emoji count by 1', () => {

    test('responds with correct data', (done) => {
        request(app)
        .patch('/blog/1/emoji/2')
        .expect({emojiCount: 176}, done)
    });

    test('responds with json', (done) => {
        request(app)
        .patch('/blog/1/emoji/2')
        .expect('Content-Type', /json/, done)
    });

    test('responds with status code 200', (done) => {
        request(app)
        .patch('/blog/1/emoji/2')
        .expect(200, done)
    });

});




// DELETE

describe('DELETE blog post', () => {
    test('responds with status code 204', (done) => {
        request(app)
        .delete('/blog/1')
        .expect(204, done);
    });
});


describe('DELETE comment on blog post', () => {
    test('responds with status code 204', (done) => {
        request(app)
        .delete('/blog/2/comment/2')
        .expect(204, done);
    });
});

