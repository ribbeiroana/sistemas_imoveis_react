import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url('https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
`
export const Text = styled.div`
width: 55%;
position: relative;
z-index: 1;
h2{
  color: var(--white);
  font-size:62px;
  font-weight: 700;
  margin-bottom: 35px;
}
p{
  color: var(--white);
  margin-bottom: 25px;
}
`