const express = require('express');
const bodyParser = require("body-parser");

const app = express();

var searched_for = '';
var bap_uri = '';
var bap_id = '';
const bpp_uri = 'https://skillyou-production.up.railway.app/';
const bpp_id = 'skillyou-production.up.railway.app';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// });

// app.use((req, res, next) => {
//   res.send('Hello from express!');
// });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

app.get("/", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(200).json({
      message: 'Skillyou is ready! Are you?'
    });
});


app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
      message: 'Post added successfully'
    });
});

app.get("/api/posts", (req, res, next) => {
    const posts = [
      {
        id: "fdf12421l",
        title: "First server-side post",
        content: "This is coming from the server"
      },
      {
        id: "ksajflaj132",
        title: "Second server-side post",
        content: "This is coming from the server!"
      }
    ];
    res.status(200).json({
      message: "Posts fetched succesfully!",
      posts: posts
    });
});

app.post("/search", (req, res, next) => {//search request has to be assimilated
    const literacy = 'liter';
    const english = 'english';
    const number = 'number';
    const numeracy = 'numer';
    const problem_solving = 'problem solving';
    const technology = 'technology';
    const basic = 'basic';


    const post = req.body;
    console.log(post);

    searched_for = '';

    if(post.message.intent.hasOwnProperty('item')){

        console.log(post.message.intent.item.descriptor.name);

        if((post.message.intent.item.descriptor.name.indexOf( technology ) > -1) || (post.message.intent.item.descriptor.name.indexOf( problem_solving ) > -1))
        {
            searched_for = 'problem solving in technology rich environment';
        }

        if((post.message.intent.item.descriptor.name.indexOf( number ) > -1) || (post.message.intent.item.descriptor.name.indexOf( numeracy ) > -1))
        {
            searched_for = 'numeracy';
        }

        if((post.message.intent.item.descriptor.name.indexOf( literacy ) > -1) || (post.message.intent.item.descriptor.name.indexOf( english ) > -1))
        {
            searched_for = 'literacy';
        }
        if((post.message.intent.item.descriptor.name.indexOf( basic ) > -1))
        {
            searched_for = 'all';
        }
    }
    else if(post.message.intent.hasOwnProperty('category')) {

        console.log(post.message.intent.category.descriptor.name);

        if((post.message.intent.category.descriptor.name.indexOf( technology ) > -1) || (post.message.intent.category.descriptor.name.indexOf( problem_solving ) > -1))
        {
            searched_for = 'problem solving in technology rich environment';
        }

        if((post.message.intent.category.descriptor.name.indexOf( number ) > -1) || (post.message.intent.category.descriptor.name.indexOf( numeracy ) > -1))
        {
            searched_for = 'numeracy';
        }

        if((post.message.intent.category.descriptor.name.indexOf( literacy ) > -1) || (post.message.intent.category.descriptor.name.indexOf( english ) > -1))
        {
            searched_for = 'literacy';
        }
        if((post.message.intent.category.descriptor.name.indexOf( basic ) > -1))
        {
            searched_for = 'all';
        }
    }    

    //console.log(post.context.bap_uri);

    bap_uri = post.context.bap_uri;

    bap_id = post.context.bap_id;

    var today = new Date().getTime();;
    //today.setHours(today.getHours() + 4);

    var today_plus_onehour = new Date(today + 1 * 60 * 60 * 1000);

    var one_hour_from_now = today_plus_onehour.toString();

    // console.log(one_hour_from_now);

    // console.log(new Date().toString());

    //schema has to be changed
    //send a message - take a quick test here before starting a course 

    //even when mentors are searched - suggest taking a test first

    // const search_response = {
    //     "context": {
    //         "domain": "dsep:courses",
    //         "version": "1.0.0",
    //         "action": "on_search",
    //         "bap_id": "dsep-protocol.becknprotocol.io",
    //         "bap_uri": "https://dsep-protocol-network.becknprotocol.io/",
    //         "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
    //         "message_id": "254ee52f-a3f1-4d2d-9e12-6483edd8d0e1",
    //         "ttl": "PT10M",
    //         "timestamp": "2023-02-26T07:05:14.814Z",
    //         "bpp_id": bpp_id,
    //         "bpp_uri": bpp_uri
    //     },
    //     "message": {
    //         "catalog": {
    //             "descriptor": {
    //                 "name": "Catalog for python"
    //             },
    //             "providers": [
    //                 {
    //                     "id": "CEC",
    //                     "descriptor": {
    //                         "name": "CEC"
    //                     },
    //                     "categories": [
    //                         {
    //                             "id": "COMP_SCI_ENGG",
    //                             "parent_category_id": "COMP_SCI_ENGG",
    //                             "descriptor": {
    //                                 "name": "COMP_SCI_ENGG"
    //                             }
    //                         },
    //                         {
    //                             "id": "COMP_SCI_ENGG",
    //                             "parent_category_id": "COMP_SCI_ENGG",
    //                             "descriptor": {
    //                                 "name": "COMP_SCI_ENGG"
    //                             }
    //                         }
    //                     ],
    //                     "items": [
    //                         {
    //                             "id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
    //                             "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
    //                             "descriptor": {
    //                                 "name": "Problem solving Aspects and Python Programming",
    //                                 "long_desc": "",
    //                                 "images": [
    //                                     {
    //                                         "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/cec20_cs04/Course%20Image.png"
    //                                     }
    //                                 ]
    //                             },
    //                             "price": {
    //                                 "currency": "INR",
    //                                 "value": "0"
    //                             },
    //                             "category_id": "COMP_SCI_ENGG",
    //                             "recommended": false,
    //                             "time": {
    //                                 "label": "Course Schedule",
    //                                 "duration": "P12W",
    //                                 "range": {
    //                                     "start": "2023-01-17T18:30:00.000000Z",
    //                                     "end": "2023-04-09T18:29:00.000000Z"
    //                                 }
    //                             },
    //                             "rating": "4",
    //                             "tags": [
    //                                 {
    //                                     "descriptor": {
    //                                         "name": "courseInfo"
    //                                     },
    //                                     "list": [
    //                                         {
    //                                             "descriptor": {
    //                                                 "name": "credits"
    //                                             },
    //                                             "value": "4"
    //                                         },
    //                                         {
    //                                             "descriptor": {
    //                                                 "name": "instructors"
    //                                             },
    //                                             "value": "Dr.S.Malliga, Dr.R.Thangarajan, Dr.S.V.Kogilavani"
    //                                         },
    //                                         {
    //                                             "descriptor": {
    //                                                 "name": "offeringInstitue"
    //                                             },
    //                                             "value": "Kongu Engineering College"
    //                                         },
    //                                         {
    //                                             "descriptor": {
    //                                                 "name": "url"
    //                                             },
    //                                             "value": "https://onlinecourses.swayam2.ac.in/cec23_cs02/preview"
    //                                         },
    //                                         {
    //                                             "decsriptor": {
    //                                                 "name": "enrollmentEndDate"
    //                                             },
    //                                             "value": "2023-02-28T18:29:00.000000Z"
    //                                         }
    //                                     ],
    //                                     "display": true
    //                                 }
    //                             ],
    //                             "rateable": false
    //                         },
    //                         {
    //                             "id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDY=",
    //                             "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDY=",
    //                             "descriptor": {
    //                                 "name": "Programming in Python",
    //                                 "long_desc": "",
    //                                 "images": [
    //                                     {
    //                                         "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/cec22_cs20/pymainlogo.jpg"
    //                                     }
    //                                 ]
    //                             },
    //                             "price": {
    //                                 "currency": "INR",
    //                                 "value": "0"
    //                             },
    //                             "category_id": "COMP_SCI_ENGG",
    //                             "recommended": false,
    //                             "time": {
    //                                 "label": "Course Schedule",
    //                                 "duration": "P12W",
    //                                 "range": {
    //                                     "start": "2023-01-22T18:30:00.000000Z",
    //                                     "end": "2023-04-16T18:29:00.000000Z"
    //                                 }
    //                             },
    //                             "rating": "5",
    //                             "tags": [
    //                                 {
    //                                     "descriptor": {
    //                                         "name": "courseInfo"
    //                                     },
    //                                     "list": [
    //                                         {
    //                                             "descriptor": {
    //                                                 "name": "credits"
    //                                             },
    //                                             "value": "4"
    //                                         },
    //                                         {
    //                                             "descriptor": {
    //                                                 "name": "instructors"
    //                                             },
    //                                             "value": "Dr. Rizwan Rehman"
    //                                         },
    //                                         {
    //                                             "descriptor": {
    //                                                 "name": "offeringInstitue"
    //                                             },
    //                                             "value": "Dibrugarh University"
    //                                         },
    //                                         {
    //                                             "descriptor": {
    //                                                 "name": "url"
    //                                             },
    //                                             "value": "https://onlinecourses.swayam2.ac.in/cec23_cs06/preview"
    //                                         },
    //                                         {
    //                                             "decsriptor": {
    //                                                 "name": "enrollmentEndDate"
    //                                             },
    //                                             "value": "2023-02-28T18:29:00.000000Z"
    //                                         }
    //                                     ],
    //                                     "display": true
    //                                 }
    //                             ],
    //                             "rateable": false
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     }
    // }

    const test_response_literacy = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_search",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "254ee52f-a3f1-4d2d-9e12-6483edd8d0e1",
            "ttl": "PT10M",
            "timestamp": new Date().toString(),
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri
        },
        "message": {
            "catalog": {
                "descriptor": {
                    "name": "Literacy test"
                },
                "providers": [
                    {
                        "id": "Skill_You",
                        "descriptor": {
                            "name": "Skill_You"
                        },
                        "categories": [
                            {
                                "id": "Literacy",
                                "parent_category_id": "Literacy",
                                "descriptor": {
                                    "name": "Literacy"
                                }
                            }
                        ],
                        "items": [
                            {
                                "id": "lt",
                                "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                                "descriptor": {
                                    "name": "Litercy test",
                                    "long_desc": ""
                                },
                                "price": {
                                    "currency": "INR",
                                    "value": "0"
                                },
                                "category_id": "Literacy test",
                                "recommended": true,
                                "time": {
                                    "label": "Test Schedule",
                                    "duration": "1 Hour",
                                    "range": {
                                        "start": new Date().toString(),
                                        "end": one_hour_from_now
                                    }
                                }
                            }        
                        ]
                    }
                ]
            }
        }
    }

    const test_response_numeracy = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_search",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "254ee52f-a3f1-4d2d-9e12-6483edd8d0e1",
            "ttl": "PT10M",
            "timestamp": new Date().toString(),
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri
        },
        "message": {
            "catalog": {
                "descriptor": {
                    "name": "Numeracy test"
                },
                "providers": [
                    {
                        "id": "Skill_You",
                        "descriptor": {
                            "name": "Skill_You"
                        },
                        "categories": [
                            {
                                "id": "Numeracy",
                                "parent_category_id": "Numeracy",
                                "descriptor": {
                                    "name": "Numeracy"
                                }
                            }
                        ],
                        "items": [
                            {
                                "id": "nt",
                                "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                                "descriptor": {
                                    "name": "Numeracy test",
                                    "long_desc": ""
                                },
                                "price": {
                                    "currency": "INR",
                                    "value": "0"
                                },
                                "category_id": "Numeracy test",
                                "recommended": true,
                                "time": {
                                    "label": "Test Schedule",
                                    "duration": "1 Hour",
                                    "range": {
                                        "start": new Date().toString(),
                                        "end": one_hour_from_now
                                    }
                                }
                            }        
                        ]
                    }
                ]
            }
        }
    }

    const test_response_problem_solving_in_technology_rich_environment  = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_search",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "254ee52f-a3f1-4d2d-9e12-6483edd8d0e1",
            "ttl": "PT10M",
            "timestamp": new Date().toString(),
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri
        },
        "message": {
            "catalog": {
                "descriptor": {
                    "name": "Problem Solving in Technology rich environment test"
                },
                "providers": [
                    {
                        "id": "Skill_You",
                        "descriptor": {
                            "name": "Skill_You"
                        },
                        "categories": [
                            {
                                "id": "Problem Solving in Technology rich environment",
                                "parent_category_id": "Problem Solving in Technology rich environment",
                                "descriptor": {
                                    "name": "Problem Solving in Technology rich environment"
                                }
                            }
                        ],
                        "items": [
                            {
                                "id": "pst",
                                "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                                "descriptor": {
                                    "name": "Problem Solving in Technology rich environment test",
                                    "long_desc": ""
                                },
                                "price": {
                                    "currency": "INR",
                                    "value": "0"
                                },
                                "category_id": "Problem Solving in Technology rich environment test",
                                "recommended": true,
                                "time": {
                                    "label": "Test Schedule",
                                    "duration": "1 Hour",
                                    "range": {
                                        "start": new Date().toString(),
                                        "end": one_hour_from_now
                                    }
                                }
                            }        
                        ]
                    }
                ]
            }
        }
    }

    const test_response_all = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_search",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "254ee52f-a3f1-4d2d-9e12-6483edd8d0e1",
            "ttl": "PT10M",
            "timestamp": new Date().toString(),
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri
        },
        "message": {
            "catalog": {
                "descriptor": {
                    "name": "Literacy test"
                },
                "providers": [
                    {
                        "id": "Skill_You",
                        "descriptor": {
                            "name": "Skill_You"
                        },
                        "categories": [
                            {
                                "id": "Literacy",
                                "parent_category_id": "Literacy",
                                "descriptor": {
                                    "name": "Literacy"
                                }
                            },
                            {
                                "id": "Numeracy",
                                "parent_category_id": "Numeracy",
                                "descriptor": {
                                    "name": "Numeracy"
                                }
                            },
                            {
                                "id": "Problem Solving in Technology rich environment",
                                "parent_category_id": "Problem Solving in Technology rich environment",
                                "descriptor": {
                                    "name": "Problem Solving in Technology rich environment"
                                }
                            }
                        ],
                        "items": [
                            {
                                "id": "lt",
                                "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                                "descriptor": {
                                    "name": "Litercy test",
                                    "long_desc": ""
                                },
                                "price": {
                                    "currency": "INR",
                                    "value": "0"
                                },
                                "category_id": "Literacy test",
                                "recommended": true,
                                "time": {
                                    "label": "Test Schedule",
                                    "duration": "1 Hour",
                                    "range": {
                                        "start": new Date().toString(),
                                        "end": one_hour_from_now
                                    }
                                }
                            },
                            {
                                "id": "nt",
                                "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                                "descriptor": {
                                    "name": "Numeracy test",
                                    "long_desc": ""
                                },
                                "price": {
                                    "currency": "INR",
                                    "value": "0"
                                },
                                "category_id": "Numeracy test",
                                "recommended": true,
                                "time": {
                                    "label": "Test Schedule",
                                    "duration": "1 Hour",
                                    "range": {
                                        "start": new Date().toString(),
                                        "end": one_hour_from_now
                                    }
                                }
                            },
                            {
                                "id": "pst",
                                "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                                "descriptor": {
                                    "name": "Problem Solving in Technology rich environment test",
                                    "long_desc": ""
                                },
                                "price": {
                                    "currency": "INR",
                                    "value": "0"
                                },
                                "category_id": "Problem Solving in Technology rich environment test",
                                "recommended": true,
                                "time": {
                                    "label": "Test Schedule",
                                    "duration": "1 Hour",
                                    "range": {
                                        "start": new Date().toString(),
                                        "end": one_hour_from_now
                                    }
                                }
                            }       
                        ]
                    }
                ]
            }
        }
    }

    if(searched_for == 'problem solving in technology rich environment'){
        res.status(201).json(
            test_response_problem_solving_in_technology_rich_environment             
        );
    }
    else if(searched_for == 'numeracy'){
        res.status(201).json(
            test_response_numeracy            
        );
    }
    else if(searched_for == 'literacy'){
        res.status(201).json(
            test_response_literacy              
        );
    }
    else if(searched_for == 'all'){
        res.status(201).json(
            test_response_all             
        );
    }    

});

//schema suggesting courses below
// const search_response = {
//     "context": {
//         "domain": "dsep:courses",
//         "version": "1.0.0",
//         "action": "on_search",
//         "bap_id": "dsep-protocol.becknprotocol.io",
//         "bap_uri": "https://dsep-protocol-network.becknprotocol.io/",
//         "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
//         "message_id": "254ee52f-a3f1-4d2d-9e12-6483edd8d0e1",
//         "ttl": "PT10M",
//         "timestamp": "2023-02-26T07:05:14.814Z",
//         "bpp_id": bpp_id,
//         "bpp_uri": bpp_uri
//     },
//     "message": {
//         "catalog": {
//             "descriptor": {
//                 "name": "Catalog for python"
//             },
//             "providers": [
//                 {
//                     "id": "CEC",
//                     "descriptor": {
//                         "name": "CEC"
//                     },
//                     "categories": [
//                         {
//                             "id": "COMP_SCI_ENGG",
//                             "parent_category_id": "COMP_SCI_ENGG",
//                             "descriptor": {
//                                 "name": "COMP_SCI_ENGG"
//                             }
//                         },
//                         {
//                             "id": "COMP_SCI_ENGG",
//                             "parent_category_id": "COMP_SCI_ENGG",
//                             "descriptor": {
//                                 "name": "COMP_SCI_ENGG"
//                             }
//                         }
//                     ],
//                     "items": [
//                         {
//                             "id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
//                             "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
//                             "descriptor": {
//                                 "name": "Problem solving Aspects and Python Programming",
//                                 "long_desc": "",
//                                 "images": [
//                                     {
//                                         "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/cec20_cs04/Course%20Image.png"
//                                     }
//                                 ]
//                             },
//                             "price": {
//                                 "currency": "INR",
//                                 "value": "0"
//                             },
//                             "category_id": "COMP_SCI_ENGG",
//                             "recommended": false,
//                             "time": {
//                                 "label": "Course Schedule",
//                                 "duration": "P12W",
//                                 "range": {
//                                     "start": "2023-01-17T18:30:00.000000Z",
//                                     "end": "2023-04-09T18:29:00.000000Z"
//                                 }
//                             },
//                             "rating": "4",
//                             "tags": [
//                                 {
//                                     "descriptor": {
//                                         "name": "courseInfo"
//                                     },
//                                     "list": [
//                                         {
//                                             "descriptor": {
//                                                 "name": "credits"
//                                             },
//                                             "value": "4"
//                                         },
//                                         {
//                                             "descriptor": {
//                                                 "name": "instructors"
//                                             },
//                                             "value": "Dr.S.Malliga, Dr.R.Thangarajan, Dr.S.V.Kogilavani"
//                                         },
//                                         {
//                                             "descriptor": {
//                                                 "name": "offeringInstitue"
//                                             },
//                                             "value": "Kongu Engineering College"
//                                         },
//                                         {
//                                             "descriptor": {
//                                                 "name": "url"
//                                             },
//                                             "value": "https://onlinecourses.swayam2.ac.in/cec23_cs02/preview"
//                                         },
//                                         {
//                                             "decsriptor": {
//                                                 "name": "enrollmentEndDate"
//                                             },
//                                             "value": "2023-02-28T18:29:00.000000Z"
//                                         }
//                                     ],
//                                     "display": true
//                                 }
//                             ],
//                             "rateable": false
//                         },
//                         {
//                             "id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDY=",
//                             "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDY=",
//                             "descriptor": {
//                                 "name": "Programming in Python",
//                                 "long_desc": "",
//                                 "images": [
//                                     {
//                                         "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/cec22_cs20/pymainlogo.jpg"
//                                     }
//                                 ]
//                             },
//                             "price": {
//                                 "currency": "INR",
//                                 "value": "0"
//                             },
//                             "category_id": "COMP_SCI_ENGG",
//                             "recommended": false,
//                             "time": {
//                                 "label": "Course Schedule",
//                                 "duration": "P12W",
//                                 "range": {
//                                     "start": "2023-01-22T18:30:00.000000Z",
//                                     "end": "2023-04-16T18:29:00.000000Z"
//                                 }
//                             },
//                             "rating": "5",
//                             "tags": [
//                                 {
//                                     "descriptor": {
//                                         "name": "courseInfo"
//                                     },
//                                     "list": [
//                                         {
//                                             "descriptor": {
//                                                 "name": "credits"
//                                             },
//                                             "value": "4"
//                                         },
//                                         {
//                                             "descriptor": {
//                                                 "name": "instructors"
//                                             },
//                                             "value": "Dr. Rizwan Rehman"
//                                         },
//                                         {
//                                             "descriptor": {
//                                                 "name": "offeringInstitue"
//                                             },
//                                             "value": "Dibrugarh University"
//                                         },
//                                         {
//                                             "descriptor": {
//                                                 "name": "url"
//                                             },
//                                             "value": "https://onlinecourses.swayam2.ac.in/cec23_cs06/preview"
//                                         },
//                                         {
//                                             "decsriptor": {
//                                                 "name": "enrollmentEndDate"
//                                             },
//                                             "value": "2023-02-28T18:29:00.000000Z"
//                                         }
//                                     ],
//                                     "display": true
//                                 }
//                             ],
//                             "rateable": false
//                         }
//                     ]
//                 }
//             ]
//         }
//     }
// }

console.log('');

// app.post(bap_uri+"/on_search", (req, res, next) => {//url has to be changed
    
    
    

//     const posts = [
//         {
//           id: "fdf12421l",
//           title: "First server-side post",
//           content: "This is coming from the server"
//         },
//         {
//           id: "ksajflaj132",
//           title: "Second server-side post",
//           content: "This is coming from the server!"
//         }
//       ];
//       res.status(200).json({
//         message: "Posts fetched succesfully!",
//         posts: posts
//       });
// });




//replicate the same for select, init, confirm

app.post("/select", (req, res, next) => {//select request has to be assimilated
    
    const post = req.body;
    console.log(post.message.order.items[0].id);

    bap_uri = post.context.bap_uri;

    bap_id = post.context.bap_id;

    var today = new Date().getTime();;

    var today_plus_onehour = new Date(today + 1 * 60 * 60 * 1000);

    var one_hour_from_now = today_plus_onehour.toString();

    const select_numeracy_response = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_select",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "254ee52f-a3f1-4d2d-9e12-6483edd8d0e1",
            "ttl": "PT10M",
            "timestamp": new Date().toString(),
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri
        },
        "message": {
            "order": {
                "provider": {
                    "id": "Skill_You",
                    "descriptor": {
                        "name": "Skill_You"
                    },
                    "category_id": "Numeracy test"
                },
                "items": [
                    {
                        "id": "nt",
                        "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                        "descriptor": {
                            "name": "Numeracy test",
                            "long_desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        "price": {
                            "currency": "INR",
                            "value": "0"
                        },
                        "category_id": "Numeracy test",
                        "recommended": true,
                        "time": {
                            "label": "Test Schedule",
                            "duration": "P12W",
                            "range": {
                                "start": new Date().toString(),
                                "end": one_hour_from_now
                            }
                        }
                    }
                ],
                "type": "DEFAULT"
            }
        }
    }

    const select_literacy_response = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_select",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "254ee52f-a3f1-4d2d-9e12-6483edd8d0e1",
            "ttl": "PT10M",
            "timestamp": new Date().toString(),
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri
        },
        "message": {
            "order": {
                "provider": {
                    "id": "Skill_You",
                    "descriptor": {
                        "name": "Skill_You"
                    },
                    "category_id": "Literacy test"
                },
                "items": [
                    {
                        "id": "lt",
                        "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                        "descriptor": {
                            "name": "Literacy test",
                            "long_desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        "price": {
                            "currency": "INR",
                            "value": "0"
                        },
                        "category_id": "Literacy test",
                        "recommended": true,
                        "time": {
                            "label": "Test Schedule",
                            "duration": "P12W",
                            "range": {
                                "start": new Date().toString(),
                                "end": one_hour_from_now
                            }
                        }
                    }
                ],
                "type": "DEFAULT"
            }
        }
    }

    const select_problem_solving_in_technology_rich_environment_response = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_select",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "254ee52f-a3f1-4d2d-9e12-6483edd8d0e1",
            "ttl": "PT10M",
            "timestamp": new Date().toString(),
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri
        },
        "message": {
            "order": {
                "provider": {
                    "id": "Skill_You",
                    "descriptor": {
                        "name": "Skill_You"
                    },
                    "category_id": "Problem Solving in Technology rich environment test"
                },
                "items": [
                    {
                        "id": "pst",
                        "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                        "descriptor": {
                            "name": "Problem Solving in Technology rich environment test",
                            "long_desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        "price": {
                            "currency": "INR",
                            "value": "0"
                        },
                        "category_id": "Problem Solving in Technology rich environment test",
                        "recommended": true,
                        "time": {
                            "label": "Test Schedule",
                            "duration": "P12W",
                            "range": {
                                "start": new Date().toString(),
                                "end": one_hour_from_now
                            }
                        }
                    }
                ],
                "type": "DEFAULT"
            }
        }
    }


    if(post.message.order.items[0].id == 'lt'){
        res.status(201).json(
            select_literacy_response             
        );
    }
    else if(post.message.order.items[0].id == 'nt'){
        res.status(201).json(
            select_numeracy_response            
        );
    }
    else if(post.message.order.items[0].id == 'pst'){
        res.status(201).json(
            select_problem_solving_in_technology_rich_environment_response              
        );
    }
});

app.post("/init", (req, res, next) => {//init request has to be assimilated
    
    const post = req.body;
    console.log(post.message.order.items[0].id);

    console.log(post.message.order.fulfillments);

    bap_uri = post.context.bap_uri;

    bap_id = post.context.bap_id;

    var today = new Date().getTime();;

    var today_plus_onehour = new Date(today + 1 * 60 * 60 * 1000);

    var one_hour_from_now = today_plus_onehour.toString();

    const init_numeracy_response = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_init",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "d39e0599-392f-4108-8456-14b8f8742ca8",
            "ttl": "PT10M",
            "timestamp": new Date().toString()
        },
        "message": {
            "order": {
                "provider": {
                    "id": "Skill_You",
                    "descriptor": {
                        "name": "Skill_You"
                    },
                    "category_id": "Numeracy test"
                },
                "items": [
                    {
                        "id": "nt",
                        "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                        "descriptor": {
                            "name": "Numeracy test",
                            "long_desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        "price": {
                            "currency": "INR",
                            "value": "0"
                        },
                        "category_id": "Numeracy test",
                        "recommended": true,
                        "time": {
                            "label": "Test Schedule",
                            "duration": "P12W",
                            "range": {
                                "start": new Date().toString(),
                                "end": one_hour_from_now
                            }
                        }
                    }
                ],
                "fulfillments": [
                    {
                        "customer": {
                            "person": {
                                "name": post.message.order.fulfillments[0].customer.person.name
                            }
                        },
                        "tracking": false
                    }
                ],
                "type": "DEFAULT"
            }
        }
    }

    const init_literacy_response = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_init",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "d39e0599-392f-4108-8456-14b8f8742ca8",
            "ttl": "PT10M",
            "timestamp": new Date().toString()
        },
        "message": {
            "order": {
                "provider": {
                    "id": "Skill_You",
                    "descriptor": {
                        "name": "Skill_You"
                    },
                    "category_id": "Literacy test"
                },
                "items": [
                    {
                        "id": "lt",
                        "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                        "descriptor": {
                            "name": "Literacy test",
                            "long_desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        "price": {
                            "currency": "INR",
                            "value": "0"
                        },
                        "category_id": "Literacy test",
                        "recommended": true,
                        "time": {
                            "label": "Test Schedule",
                            "duration": "P12W",
                            "range": {
                                "start": new Date().toString(),
                                "end": one_hour_from_now
                            }
                        }
                    }
                ],
                "fulfillments": [
                    {
                        "customer": {
                            "person": {
                                "name": post.message.order.fulfillments[0].customer.person.name
                            }
                        },
                        "tracking": false
                    }
                ],
                "type": "DEFAULT"
            }
        }
    }

    const init_problem_solving_in_technology_rich_environment_response = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_init",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "d39e0599-392f-4108-8456-14b8f8742ca8",
            "ttl": "PT10M",
            "timestamp": new Date().toString()
        },
        "message": {
            "order": {
                "provider": {
                    "id": "Skill_You",
                    "descriptor": {
                        "name": "Skill_You"
                    },
                    "category_id": "Problem Solving in Technology rich environment test"
                },
                "items": [
                    {
                        "id": "pst",
                        "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                        "descriptor": {
                            "name": "Problem Solving in Technology rich environment test",
                            "long_desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        "price": {
                            "currency": "INR",
                            "value": "0"
                        },
                        "category_id": "Problem Solving in Technology rich environment test",
                        "recommended": true,
                        "time": {
                            "label": "Test Schedule",
                            "duration": "P12W",
                            "range": {
                                "start": new Date().toString(),
                                "end": one_hour_from_now
                            }
                        }
                    }
                ],
                "fulfillments": [
                    {
                        "customer": {
                            "person": {
                                "name": post.message.order.fulfillments[0].customer.person.name
                            }
                        },
                        "tracking": false
                    }
                ],
                "type": "DEFAULT"
            }
        }
    }

    if(post.message.order.items[0].id == 'lt'){
        res.status(201).json(
            init_literacy_response             
        );
    }
    else if(post.message.order.items[0].id == 'nt'){
        res.status(201).json(
            init_numeracy_response         
        );
    }
    else if(post.message.order.items[0].id == 'pst'){
        res.status(201).json(
            init_problem_solving_in_technology_rich_environment_response          
        );
    }
});

app.post("/confirm", (req, res, next) => {//confirm request has to be assimilated
    
    const post = req.body;
    console.log(post.message.order.items[0].id);

    console.log(post.message.order.fulfillments);

    bap_uri = post.context.bap_uri;

    bap_id = post.context.bap_id;

    var today = new Date().getTime();;

    var today_plus_onehour = new Date(today + 1 * 60 * 60 * 1000);

    var one_hour_from_now = today_plus_onehour.toString();

    const confirm_numeracy_response = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_confirm",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "d39e0599-392f-4108-8456-14b8f8742ca8",
            "ttl": "PT10M",
            "timestamp": new Date().toString()
        },
        "message": {
            "order": {
                "provider": {
                    "id": "Skill_You",
                    "descriptor": {
                        "name": "Skill_You"
                    },
                    "category_id": "Numeracy test"
                },
                "items": [
                    {
                        "id": "nt",
                        "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                        "descriptor": {
                            "name": "Numeracy test",
                            "long_desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        "price": {
                            "currency": "INR",
                            "value": "0"
                        },
                        "category_id": "Numeracy test",
                        "recommended": true,
                        "time": {
                            "label": "Test Schedule",
                            "duration": "P12W",
                            "range": {
                                "start": new Date().toString(),
                                "end": one_hour_from_now
                            }
                        }
                    }
                ],
                "fulfillments": [
                    {
                        "customer": {
                            "person": {
                                "name": post.message.order.fulfillments[0].customer.person.name
                            }
                        },
                        "tracking": false
                    }
                ],
                "id": "a9aaecca-10b7-4d19-b640-b047a7c621961677327444915",
                "state": "COMPLETE",
                "type": "DEFAULT",
                "created_at": new Date().toString(),
                "updated_at": new Date().toString()
            }
        }
    }

    const confirm_literacy_response = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_confirm",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "d39e0599-392f-4108-8456-14b8f8742ca8",
            "ttl": "PT10M",
            "timestamp": new Date().toString()
        },
        "message": {
            "order": {
                "provider": {
                    "id": "Skill_You",
                    "descriptor": {
                        "name": "Skill_You"
                    },
                    "category_id": "Literacy test"
                },
                "items": [
                    {
                        "id": "lt",
                        "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                        "descriptor": {
                            "name": "Literacy test",
                            "long_desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        "price": {
                            "currency": "INR",
                            "value": "0"
                        },
                        "category_id": "Literacy test",
                        "recommended": true,
                        "time": {
                            "label": "Test Schedule",
                            "duration": "P12W",
                            "range": {
                                "start": new Date().toString(),
                                "end": one_hour_from_now
                            }
                        }
                    }
                ],
                "fulfillments": [
                    {
                        "customer": {
                            "person": {
                                "name": post.message.order.fulfillments[0].customer.person.name
                            }
                        },
                        "tracking": false
                    }
                ],
                "id": "a9aaecca-10b7-4d19-b640-b047a7c621961677327444915",
                "state": "COMPLETE",
                "type": "DEFAULT",
                "created_at": new Date().toString(),
                "updated_at": new Date().toString()
            }
        }
    }

    const confirm_problem_solving_in_technology_rich_environment_response = {
        "context": {
            "domain": "dsep:courses",
            "version": "1.0.0",
            "action": "on_confirm",
            "bap_id": bap_id,
            "bap_uri": bap_uri,
            "bpp_id": bpp_id,
            "bpp_uri": bpp_uri,
            "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
            "message_id": "d39e0599-392f-4108-8456-14b8f8742ca8",
            "ttl": "PT10M",
            "timestamp": new Date().toString()
        },
        "message": {
            "order": {
                "provider": {
                    "id": "Skill_You",
                    "descriptor": {
                        "name": "Skill_You"
                    },
                    "category_id": "Problem Solving in Technology rich environment test"
                },
                "items": [
                    {
                        "id": "pst",
                        "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                        "descriptor": {
                            "name": "Problem Solving in Technology rich environment test",
                            "long_desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        "price": {
                            "currency": "INR",
                            "value": "0"
                        },
                        "category_id": "Problem Solving in Technology rich environment test",
                        "recommended": true,
                        "time": {
                            "label": "Test Schedule",
                            "duration": "P12W",
                            "range": {
                                "start": new Date().toString(),
                                "end": one_hour_from_now
                            }
                        }
                    }
                ],
                "fulfillments": [
                    {
                        "customer": {
                            "person": {
                                "name": post.message.order.fulfillments[0].customer.person.name
                            }
                        },
                        "tracking": false
                    }
                ],
                "id": "a9aaecca-10b7-4d19-b640-b047a7c621961677327444915",
                "state": "COMPLETE",
                "type": "DEFAULT",
                "created_at": new Date().toString(),
                "updated_at": new Date().toString()
            }
        }
    }

    if(post.message.order.items[0].id == 'lt'){
        res.status(201).json(
            confirm_literacy_response             
        );
    }
    else if(post.message.order.items[0].id == 'nt'){
        res.status(201).json(
            confirm_numeracy_response         
        );
    }
    else if(post.message.order.items[0].id == 'pst'){
        res.status(201).json(
            confirm_problem_solving_in_technology_rich_environment_response          
        );
    }
});

module.exports = app;