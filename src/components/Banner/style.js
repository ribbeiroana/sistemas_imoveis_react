import styled from 'styled-components';

export const Container = styled.div`
 background-image: url('https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center; 
  height: 600px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  color: white; 
  text-align: center; 
  padding: 200px 150px;

`
export const Text = styled.div`
width: 55%;
position: relative;
z-index: 1;
h2{
  color: var(--white);
  font-size: 50px;
  font-weight: 800;
  margin-bottom: 35px;
}
h3{
  color: var(--white);
  margin-bottom: 25px;
}
span{
  background-color: var(--blue);
  border: 0;
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  padding: 12px 120px;
  line-height: 24px;
  border-radius: 3px;
  cursor: pointer;
}



`