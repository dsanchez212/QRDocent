import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

function PrimaryButton({ width, height, text, fontSize, lm, rm, icon, path, onClick }) {
    const primaryButtonStyle = makeStyles({
        root: {
            background: 'linear-gradient(180deg, #614AD3, #864AD3)',
            border: 0,
            borderRadius: 20,
            color: 'white',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '35px',
            paddingRight: '35px',
            marginLeft: lm,
            marginRight: rm,
            width: width,
            height: height,
            fontSize: fontSize
        }
    });

    const classes = primaryButtonStyle();
    return (
        <>
            {path ? (
                <Link to={path} style={{ textDecoration: 'none' }}>
                    <Button className={classes.root} startIcon={icon}>
                        {text}
                    </Button>
                </Link>
            ) : (
                <Button onClick={onClick} className={classes.root} startIcon={icon}>
                    {text}
                </Button>
            )}
        </>
    );
}

PrimaryButton.propTypes = {
    fontSize: PropTypes.string,
    height: PropTypes.string,
    icon: PropTypes.element,
    rm: PropTypes.string,
    lm: PropTypes.string,
    onClick: PropTypes.any,
    path: PropTypes.string,
    text: PropTypes.string,
    width: PropTypes.string
};

export default PrimaryButton;
