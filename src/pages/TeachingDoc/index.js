import React, { useState } from 'react';
import { MainLayout, ContentLayout } from '../../layout'
import {
    Grid,
    GridItem,
    Box
} from '@chakra-ui/react'
import '../../paginate.css'
import { TeachingCard } from '../../components'
import ReactPaginate from 'react-paginate';



function TechingDoc() {
    const shoes = [
        {
        name: "VALOUR BLUE",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "JORDAN MARS 270 LONDON",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "RACER BLUE",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "VALOUR BLUE1",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "JORDAN MARS 270 LONDON1",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "RACER BLUE1",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "VALOUR BLUE2",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "JORDAN MARS 270 LONDON2",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "RACER BLUE2",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "VALOUR BLUE3",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "JORDAN MARS 270 LONDON3",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "RACER BLUE3",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "VALOUR BLUE4",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "JORDAN MARS 270 LONDON4",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "RACER BLUE4",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "VALOUR BLUE5",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "JORDAN MARS 270 LONDON5",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        {
        name: "RACER BLUE5",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        }
    ]
    
    const [ pageNumber, setPageNumber ] = useState(0);
    const TeachPerpage = 12;
    const pageVisited = pageNumber * TeachPerpage
    
    const DataPersonel = shoes
    .slice(pageVisited, pageVisited + TeachPerpage)
    .map((rs, index) => 
        {
                return (
                <GridItem key={index}>
                    <TeachingCard data={rs} />
                </GridItem>
            )
        }
    )
    
    const pageCount = Math.ceil(shoes.length / TeachPerpage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
  return(
      <>
        <MainLayout>
            <Grid gridTemplateColumns='repeat(4, 1fr)' gap={4}>
                <GridItem colSpan={1}>
                    <ContentLayout height={'100vh'}>
                        das
                    </ContentLayout>
                </GridItem>
                <GridItem colSpan={3}>
                    <ContentLayout height={'100vh'}>
                      <Box padding={10 }>                        
                        <Grid>
                            <GridItem>                                
                                <Grid templateColumns='repeat(3,1fr)'>
                                    {DataPersonel}
                                </Grid>
                            </GridItem>
                            <GridItem>                                
                                <ReactPaginate
                                    previousLabel={"<"}
                                    nextLabel={">"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    pageClassName={"page"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                    siblingCount={1}
                                    pageRangeDisplayed={2}
                                />
                            </GridItem>
                        </Grid>
                      </Box>
                    </ContentLayout>
                </GridItem>
            </Grid>
        </MainLayout>
      </>
  );
}

export default TechingDoc;
