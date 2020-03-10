import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Input from 'microcomponents/input';
import { checkout } from 'state';
import Typography from 'microcomponents/typography';
import Button from 'microcomponents/button';
import Icon from 'microcomponents/icon';
import MasterCard from 'assets/images/Mastercard-logo.svg';
import Visa from 'assets/images/visa.png';
import emptyState from 'assets/images/empty.png'

const styles = theme => ({
  tabel: {
    width: '100%',
    height: '90%',
    '& tr': {
      marginBottom: 15,
      display: 'flex',
      justifyContent: ' space-between',
      alignItems: 'center',
      '& td': {
        display: 'flex',
        width: '100%',
        textAlign: 'center',
        '& p': {
          fontWeight: 'bold'
        },
        '& sup': {
          fontWeight: 'bold'
        }
      }
    }
  },
  inputCount: {
    width: 50,
    '& input': {
      textAlign: 'center'
    }
  },
  imageProduct: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  },
  footerItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  countinueShopping: {
    color: '#0288d1',
    margin: 0
  },
  countinueShoppingIcon: {
    marginRight: 10
  },
  totalShop: {
    display: 'flex',
    alignItems: 'flex-end',
    '& p': {
      fontWeight: 'bold',
      color: '#bdbdbd'
    },
    '& h5': {
      fontWeight: 'bold'
    }
  },
  cardDetail: {
    background: '#292929',
    height: '100%',
    borderRadius: 10,
    padding: 30,
    transform: 'translateX(55px)',
    transition: 'all .3s',
    opacity: 0,
    visibility: 'hidden'
  },
  notEmpty: {
    transition: 'all .3s',
    transform: 'translateX(0)',
    opacity: 1,
    visibility: 'visible'
  },
  titleCardDrtails: {
    color: '#fff',
    fontWeight: 'bold'
  },
  titleCardType: {
    color: '#797979',
    fontSize: '.8em',
    fontWeight: 'bold',
    marginTop: '2em'
  },
  bank: {
    display: 'flex',
    alignItems: 'center'
  },
  otherBank: {
    '& img': {
      width: 80
    }
  },
  cardBank: {
    width: 320,
    height: 170,
    background: '#616161',
    borderRadius: 5,
    marginTop: '1em',
    transform: 'translateX(-65px)',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  logoCardBank: {
    '& img': {
      width: 50,
      height: '100%',
      objectFit: 'contain'
    }
  },
  cardBankNumber: {
    display: 'flex',
    justifyContent: 'space-around',
    '& p': {
      fontSize: '0.8em',
      fontWeight: 'bolder',
      color: '#fff'
    }
  },
  nameDate: {
    display: 'flex',
    justifyContent: 'space-between',
    '& p': {
      fontSize: '0.9em',
      fontWeight: 'bolder',
      color: '#fff'
    }
  },
  addedData: {
    marginTop: '1em'
  },
  inputBank: {
    color: '#fff',
    '& label': {
      color: '#fff'
    },
    '& input': {
      fontSize: '0.9em',
      fontWeight: 'bolder',
      color: '#fff'
    }
  },
  dateBankCard: {
    fontSize: '0.9em',
    fontWeight: 'bolder',
    color: '#fff'
  },
  emptyStateBox:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
});

class CartShop extends React.Component {
  state = {
    continueShop: false,
    name: '',
    cardNumber: '',
    number: [],
    month: '',
    year: '',
    cvv: ''
  };

  countinueShopping = () => {
    this.setState({
      continueShop: true
    });
  };

  handelInput = name => event => {
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    if (name === 'cardNumber') {
      var parts = value.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{4})+(?!\d))/g, ',');
      // array = parts[0].split(',');
      this.setState({
        number: parts[0].split(',')
      });
    }
  };

  checkout = event => {
    event.preventDefault();
    const { history,dispatch } = this.props;
    dispatch(checkout());
    this.setState({
      continueShop: false
    });
    setTimeout(() => history.push('/'), 500);
  };

  handelClickHome = () =>{
    const { history } = this.props;
    history.push('/')
  }

  render() {
    const { productCard, total, classes } = this.props;
    const hasProduct = productCard.length > 0;
    const nodes = hasProduct ? (
      <table className={classes.tabel}>
        {productCard.map(item => (
          <tr key={item.id}>
            <td>
              <div className={classes.imageProduct}>
                <img src={item.image} alt={item.title} />
              </div>
            </td>
            <td>
              <Typography>{item.title}</Typography>
            </td>
            <td>
              <Input
                variant="outlined"
                value={item.quantity}
                className={classes.inputCount}
              />
            </td>
            <td>
              <sup>$</sup>
              <Typography>{item.price}</Typography>
            </td>
          </tr>
        ))}
      </table>
    ) : (
      <div className={classes.emptyStateBox}>
        <img src={emptyState} alt=""/>
        <em>Pleas add some products to cart</em>
        <Button onClick={this.handelClickHome}>Go To Home</Button>
      </div>
    );
    const {
      continueShop,
      name,
      cardNumber,
      month,
      year,
      cvv,
      number
    } = this.state;
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography>Shopping Cart</Typography>
            {nodes}
            {hasProduct && (
              <div className={classes.footerItem}>
                <Button
                  className={classes.countinueShopping}
                  onClick={this.countinueShopping}
                >
                  <Icon className={classes.countinueShoppingIcon}>
                    keyboard_backspace
                  </Icon>
                  Countinue Shopping
                </Button>
                <div className={classes.totalShop}>
                  <Typography>Suntotal:</Typography>
                  <Typography variant="h5">${total}</Typography>
                </div>
              </div>
            )}
          </Grid>

          <Grid item xs={4}>
            <div
              className={[
                classes.cardDetail,
                continueShop && classes.notEmpty
              ].join(' ')}
            >
              <Typography className={classes.titleCardDrtails}>
                Card Details
              </Typography>
              <Typography className={classes.titleCardType}>
                Card Type
              </Typography>
              <div className={classes.bank}>
                <div className={classes.cardBank}>
                  <div className={classes.logoCardBank}>
                    <img src={Visa} alt="" />
                  </div>
                  <div className={classes.cardBankNumber}>
                    {number.map(item => (
                      <Typography>{item}</Typography>
                    ))}
                  </div>
                  <div className={classes.nameDate}>
                    <Typography>{name}</Typography>
                    <Typography>
                      {month}/{year}
                    </Typography>
                  </div>
                </div>
                <div className={classes.otherBank}>
                  <img src={MasterCard} alt="" />
                </div>
              </div>

              <Grid container spacing={2} className={classes.addedData}>
                <Grid item xs={12}>
                  <Input
                    color="secondary"
                    label="Name on Card"
                    fullWidth
                    className={classes.inputBank}
                    onChange={this.handelInput('name')}
                    value={name}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Input
                    label="Card Number"
                    fullWidth
                    className={classes.inputBank}
                    onChange={this.handelInput('cardNumber')}
                    value={cardNumber}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography className={classes.dateBankCard}>
                    Expiretion date
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Input
                    label="mm"
                    fullWidth
                    className={classes.inputBank}
                    inputProps={{
                      maxLength: 2
                    }}
                    onChange={this.handelInput('month')}
                    value={month}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Input
                    label="yy"
                    fullWidth
                    className={classes.inputBank}
                    inputProps={{
                      maxLength: 2
                    }}
                    onChange={this.handelInput('year')}
                    value={year}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Input
                    label="CVV2"
                    fullWidth
                    className={classes.inputBank}
                    inputProps={{
                      maxLength: 5
                    }}
                    onChange={this.handelInput('cvv')}
                    value={cvv}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={this.checkout}
                  >
                    Check Out
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const getCardProduct = state => {
  console.log('get', state.card.addedIds);
  return state.card.addedIds.map(id => ({
    ...state.products[id],
    quantity: state.card.quantityById[id] || 0
  }));
};

const getTotal = state =>
  state.card.addedIds
    .reduce(
      (total, id) =>
        total + state.products[id].price * (state.card.quantityById[id] || 0),
      0
    )
    .toFixed(2);

const mapStateToProps = state => ({
  productCard: getCardProduct(state),
  total: getTotal(state)
});

export default connect(mapStateToProps)(
  withStyles(styles)(withRouter(CartShop))
);
