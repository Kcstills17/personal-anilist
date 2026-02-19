# Project: Personal Anilist application 
A personal version of the site anilist.co 
Contains the base functionality of the original app but removes features I do not have use for.
# Code Style 
- Typescript is in strict mode. Do not use 'any' types, types should be taken seriously and never skimped over for the sake of having code complete 
- Be sure that there is no way for data to be accessed. E.g. XSS attacks, SQL injections, etc. security should be the number one priority 
- Prioritize Understanding and easily read code over maximum abstraction. However when it is possible try to reuse common code logic to maintain some DRY principles 
- Testing should be vital. For the frontend testing from the viewpoint of the user and the functionality of the code should be done. Testing should also be logically tested in the backend. 
- For GraphQL I have never worked with it. So when setting things up let's only refer to the apollographql documentation to make sure we are using proper resources to learn. 