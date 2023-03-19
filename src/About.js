import React, { Fragment } from 'react';
import {
  Container, Row, Col, CardImg
} from 'reactstrap';
import PIC from './assets/project2.webp';
const  Homepage = () => {
  return (
    <>
      <Fragment>
          <Container className="px-0 pt-4 bg-white">
            <Row  className="position-relative mt-2 mb-2">
              <Col  tag="section" className="py-5 mb-5 py-md-0 mb-md-0 ">
                <h1 className='text-center'>"A goal without a plan is just a wish."</h1>
                <h5 className='p-4'>Project management is the process of organizing, planning, and overseeing various tasks and resources to achieve specific goals and objectives. A project management website can provide tools and resources to help users plan, execute, and track their projects, as well as collaborate with team members and stakeholders.
                
                  One important feature of a project management website is budget tracking. This allows users to monitor and manage their project finances, including costs, revenues, and profits. Users can create and manage budgets, track expenses, which help them make informed decisions and stay within their project budget.
                </h5>
                <div className=' '>
                <CardImg src={PIC} alt="banner" className='w-50 h-50 d-flex m-auto'/>
                </div>
              </Col>

              {/* <Col xs={{ order: 1 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
              
                  <CardImg top width="100%" src={BANNER} alt="banner" />
                  <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary"> Turn Your Goals into Reality</CardTitle>
                    <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>"Effective project management is the cornerstone of successful business operations. It enables teams to stay organized, on task, and within budget, while ensuring that projects are completed on time and to the highest standards of quality."

                      "Project management is not just about completing tasks and hitting deadlines, it's about creating value and delivering results that exceed expectations."

                      "With the right project management tools and techniques, you can turn your goals into reality and achieve success in any project you undertake."</CardText>
                    <Button color="primary" >
                      <a href="/trello" className="font-weight-bold text-decoration-none text-white">
                        Let's Go
                      </a>
                    </Button>
                  </CardBody>
              </Col> */}
            </Row>
          </Container>
      </Fragment>

    </>
  )
}

export default Homepage