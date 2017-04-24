import * as React from 'react';
const styles: any = require('./styles.scss');

/* tslint:disable:max-line-length */
export const HeaderComponent: React.StatelessComponent<{}> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIGZpbGw9Im5vbmUiIHI9IjI0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB3aWR0aD0iNTAiLz48cGF0aCBkPSJNMjkuOTMzLDM1LjUyOGMtMC4xNDYtMS42MTItMC4wOS0yLjczNy0wLjA5LTQuMjFjMC43My0wLjM4MywyLjAzOC0yLjgyNSwyLjI1OS00Ljg4OGMwLjU3NC0wLjA0NywxLjQ3OS0wLjYwNywxLjc0NC0yLjgxOCAgYzAuMTQzLTEuMTg3LTAuNDI1LTEuODU1LTAuNzcxLTIuMDY1YzAuOTM0LTIuODA5LDIuODc0LTExLjQ5OS0zLjU4OC0xMi4zOTdjLTAuNjY1LTEuMTY4LTIuMzY4LTEuNzU5LTQuNTgxLTEuNzU5ICBjLTguODU0LDAuMTYzLTkuOTIyLDYuNjg2LTcuOTgxLDE0LjE1NmMtMC4zNDUsMC4yMS0wLjkxMywwLjg3OC0wLjc3MSwyLjA2NWMwLjI2NiwyLjIxMSwxLjE3LDIuNzcxLDEuNzQ0LDIuODE4ICBjMC4yMiwyLjA2MiwxLjU4LDQuNTA1LDIuMzEyLDQuODg4YzAsMS40NzMsMC4wNTUsMi41OTgtMC4wOTEsNC4yMWMtMS4yNjEsMy4zOS03LjczNywzLjY1NS0xMS40NzMsNi45MjQgIGMzLjkwNiwzLjkzMywxMC4yMzYsNi43NDYsMTYuOTE2LDYuNzQ2czE0LjUzMi01LjI3NCwxNS44MzktNi43MTNDMzcuNjg4LDM5LjE4NiwzMS4xOTcsMzguOTMsMjkuOTMzLDM1LjUyOHoiLz48L3N2Zz4=" alt="user photo" className="user__avatar" />
        <div className="user__summary">
          <span className={styles.name}>Santiago Camargo Rodríguez</span>
          <span className={styles.role}>Student</span>
        </div>
      </div>
      <div className={styles.actions}>
        <span className="glyphicon glyphicon-cog" />
      </div>
    </header>
  );
};
