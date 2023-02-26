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

app.post("/search", (req, res, next) => {
    const literacy = 'liter';
    const english = 'english';
    const number = 'number';
    const numeracy = 'numer';
    const problem_solving = 'problem solving';
    const technology = 'technology';
    const basic = 'basic';


    const post = req.body;

    searched_for = '';

    if(post.message.intent.hasOwnProperty('item')){

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

    bap_uri = post.context.bap_uri;

    bap_id = post.context.bap_id;

    var today = new Date().getTime();;

    var today_plus_onehour = new Date(today + 1 * 60 * 60 * 1000);

    var one_hour_from_now = today_plus_onehour.toString();

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

app.post("/select", (req, res, next) => {
    
    const post = req.body;

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

app.post("/init", (req, res, next) => {
    
    const post = req.body;
    
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

app.post("/confirm", (req, res, next) => {
    
    const post = req.body;

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