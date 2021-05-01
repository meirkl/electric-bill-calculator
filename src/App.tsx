import React from 'react';
import styled from 'styled-components';

function formatValue(value: number | string): string {
  return parseFloat(value.toString()).toFixed(2);
}
// const KWH = 0.4484;

const App = (): React.ReactElement => {
  const initialValue = formatValue(0);
  const [KWH, setKWH] = React.useState(0);
  const [quantity, setQuantity] = React.useState('');
  const [total, setTotal] = React.useState({
    withTax: initialValue,
    withoutTax: initialValue,
    tax: initialValue,
  });

  const calcBill = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!isNaN(+value)) {
      const taxPercentage = 17;
      const withoutTax = +value * (KWH / 100);
      const tax = (withoutTax * taxPercentage) / 100;
      const withTax = withoutTax + tax;
      setQuantity(value);
      setTotal({
        withoutTax: formatValue(withoutTax),
        tax: formatValue(tax),
        withTax: formatValue(withTax),
      });
    }
  };
  return (
    <>
      <Container>
        <Header>
          <Title>מחשבון קוט"ש</Title>
          <SubTitle>
            <p>
              מחיר קוט"ש -{' '}
              <input
                type="number"
                value={KWH}
                onChange={e => setKWH(e.target.value as any)}
                style={{ width: '65px' }}
              />{' '}
              אג'
            </p>
            &nbsp;&nbsp;&#124;&nbsp;&nbsp;
            <p>מע"מ - 17%</p>
          </SubTitle>
        </Header>
        <Input
          type="text"
          pattern="[+-]?([0-9]*[.])?[0-9]+"
          value={quantity}
          onChange={calcBill}
          placeholder='קוט"ש'
        />
        <Table>
          <tbody>
            <tr>
              <td>ללא מע"מ:</td>
              <td>{total.withoutTax}</td>
            </tr>
            <tr>
              <td>מע"מ:</td>
              <td>{total.tax}</td>
            </tr>
            <tr>
              <td>סה"כ:</td>
              <td>{total.withTax}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0.67em 0;
  @media (max-width: 576px) {
    font-size: 2.3rem;
  }
`;

const SubTitle = styled.div`
  p {
    display: inline-block;
    margin: 1em 0;
  }
`;

const Input = styled.input`
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 15px;
  color: #fff;
  background-color: #3d3d3d;
  font-size: 30px;
  @media (max-width: 576px) {
    font-size: 18px;
  }
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  :-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Table = styled.table`
  overflow: scroll;
  margin-top: 15px;
  border-collapse: collapse;
  text-align: center;
  vertical-align: center;
  td {
    padding: 15px;
  }
`;

export default App;
