export default enum Queryes{
    ALL_ORDERS = 'SELECT ORDER_ID,NAME,CLIENT,TYPE,COUNT_ITEMS,COST_ITEM,ORDERS_COST,PRIORITY,DEADLONE FROM ORDERS',
    ALL_CLIENTS= 'SELECT CLIENT_ID,NAME,PHONE,EMAIL,COUNTRY,COUNTRY FROM CLIENTS';
}