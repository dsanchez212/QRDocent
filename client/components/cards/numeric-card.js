import {
    Button,
    Card,
    CardContent,
    makeStyles,
    Menu,
    MenuItem,
    Typography
} from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NumericCard({ styles, data }) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const signBool = data.percent >= 0;
    const sign = signBool ? '+' : '-';

    const [anchorEl, setAnchorEl] = useState(null);
    const [timeMenu, setTimeMenu] = useState('Today');

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = item => {
        setAnchorEl(null);
        setTimeMenu(item);
    };

    return (
        <div>
            <Card className={classes.root}>
                <CardContent className={classes.content}>
                    <Typography component="h3" variant="h6">
                        Total Scans
                    </Typography>
                    <Typography component="span" variant="h4" className={classes.headingText}>
                        {data.numScans.toLocaleString()}
                    </Typography>
                    <div>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            className={signBool ? classes.detailPositive : classes.detailNegative}>
                            {sign + data.percent + '%'}
                        </Typography>
                        <Typography
                            component="span"
                            variante="subtitle1"
                            className={classes.changeText}>
                            {' Since ' + timeMenu.toLowerCase()}
                        </Typography>
                    </div>
                </CardContent>

                <div className={classes.topRightMenu}>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        {timeMenu}
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={() => handleClose(timeMenu)}>
                        <MenuItem onClick={() => handleClose('Today')}>Today</MenuItem>
                        <MenuItem onClick={() => handleClose('This Week')}>This Week</MenuItem>
                        <MenuItem onClick={() => handleClose('This Month')}>This Month</MenuItem>
                        <MenuItem onClick={() => handleClose('All Time')}>All Time</MenuItem>
                    </Menu>
                </div>
            </Card>
        </div>
    );
}

NumericCard.propTypes = {
    styles: PropTypes.object,
    data: PropTypes.object
};

export default NumericCard;
