import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Main() {
    return (
        <Container className="text-center">

        <h1 class="text-center"><small>Proudly serving Park City, UT and Star Valley, WY</small></h1>

        <p class="text-justify m-4">General Contractor and Excavating Contractor specializing in design builds,
        troubleshooting and building the impossible! If you can dream it, we can
        build it! When you are ready to build your home or barn,
        we are the perfect company for the job. Family owned and proudly operated. Licensed General Contractor,
          fully insured.</p>

        <h3 class="text-center "> Specializing in Excavation</h3>
       
        <p class="text-justify m-4">With 20 years in the business, we specialize in excavation. From footings and foundations, to rock walls and berms, we have the experience and equipment to get the job done. Attention to detail is everything.</p>
       
        <h3 class="text-center">
          Check us out on
          <a href="https://www.facebook.com/Innovative-Construction-Services-100988848713897" target="_blank"> Facebook!</a> </h3>
          <Button className="btn-dark text-white rounded text-center mt-2"><a href="mailto:innovativeconstruction@outlook.com" class="text-white " >
            Email today for information or an estimate.</a>
          </Button>
      </Container>
    )
}
