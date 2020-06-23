const apiKey =
  'NSyFiU-41GD0RLNP2xA7o7HmxiXjntYUdxhoDOjb5R2OqP0EbpUFsFgWtMzOxDZxajB33VV1ubEyr8IXBCcWfTR43UjCr0_0jweUTwhPRVxpa5CL4NlkquSyxR63XnYx';

const Yelp = {
  search: (term, location, sortBy) => {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    ).then((response) =>{
      return response.json()
    }).then(jsonResponse=>{
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map((business)=>(/*varför den här parantes??*/{
          id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
        }))
      }
    })
  },
};
export default Yelp