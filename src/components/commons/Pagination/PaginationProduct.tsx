import { getProducts } from 'api/product.api';
import {
  Wrapper,
  PaginationPage,
  PaginationList,
  PaginationLink,
  PaginationIcon,
  PaginationLinkOne
} from './PaginationProduct.styled';
import { Pagination } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changePage } from 'store/paginationSlice';
const PaginationProduct: React.FC = () => {
  const dispatch = useDispatch();

  // const onchange = (pageNumber: number) => {
  //   dispatch(changePage(pageNumber));
  // };

  return (
    // <Wrapper>
    //   <Pagination defaultCurrent={1} onChange={onchange} total={20} />
    // </Wrapper>
    <Wrapper>
      <PaginationPage>
        <PaginationList>
          <PaginationLink>
            <Link to=''>
              <PaginationIcon>
                <svg
                  className='pagination-icon-arrow-left'
                  version='1.1'
                  id='Layer_1'
                  x='0px'
                  y='0px'
                  viewBox='0 0 511.641 511.641'
                >
                  <g>
                    <g>
                      <path
                        d='M148.32,255.76L386.08,18c4.053-4.267,3.947-10.987-0.213-15.04c-4.16-3.947-10.667-3.947-14.827,0L125.707,248.293
                                                 c-4.16,4.16-4.16,10.88,0,15.04L371.04,508.667c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827
                                                 L148.32,255.76z'
                      />
                    </g>
                  </g>
                </svg>
              </PaginationIcon>
            </Link>
          </PaginationLink>
        </PaginationList>
        {Array(6).fill(0).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <PaginationList key={pageNumber}>
            <PaginationLinkOne>
              <Link to={``}>{pageNumber}</Link>
            </PaginationLinkOne>
          </PaginationList>
          )
 
        })
      }
        <PaginationList>
          <PaginationLink>
            <Link to=''>
              <PaginationIcon>
                <svg
                  className='pagination-icon-arrow-right'
                  version='1.1'
                  id='Capa_1'
                  x='0px'
                  y='0px'
                  viewBox='0 0 490.8 490.8'
                >
                  <path
                    d='M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82
                                             l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262
                                             c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z'
                  />
                  <path
                    d='M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115
                                             L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667
                                             c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z'
                  />
                </svg>
              </PaginationIcon>
            </Link>
          </PaginationLink>
        </PaginationList>
      </PaginationPage>
    </Wrapper>
  );
};

export default PaginationProduct;
