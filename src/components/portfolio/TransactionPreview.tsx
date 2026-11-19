export default function TransactionPreview() {
  return <div className="transaction-scene transaction-dashboard">
    <div className="transaction-heading"><span>TRANSACTION SYSTEMS</span><b>Stream. Validate. Deliver.</b></div>
    <div className="transaction-chart-panel"><div><span>EVENT ACTIVITY</span><span>ILLUSTRATIVE</span></div><svg viewBox="0 0 400 92"><g fill="none" stroke="#7397b42b" strokeWidth=".6"><path d="M0 18H400 M0 45H400 M0 72H400 M80 0V92 M160 0V92 M240 0V92 M320 0V92"/></g><path d="M0 72L22 67L40 73L61 49L82 58L103 40L124 46L145 29L166 39L187 23L208 33L230 20L251 31L272 15L294 22L316 10L338 19L360 9L380 14L400 6" stroke="#82c0e7" strokeWidth="2" fill="none"/><path d="M0 83L40 78L80 79L120 69L160 70L200 58L240 60L280 46L320 42L360 38L400 30" stroke="#95bba8" strokeWidth="1.4" fill="none"/></svg><div className="transaction-legend"><span><i/> State changes</span><span><i/> Integrity checks</span></div></div>
    <div className="transaction-stack">{[['C#','Subscriptions'],['Python','Event pipelines'],['SQL','Source data'],['PyTest','Validation']].map(([title,detail])=><div key={title}><b>{title}</b><span>{detail}</span></div>)}</div>
  </div>;
}
