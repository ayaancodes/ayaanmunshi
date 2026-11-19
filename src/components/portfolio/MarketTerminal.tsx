const depth = [
  ['2,400', '104.81', '104.83', '1,800'],
  ['3,200', '104.80', '104.84', '2,100'],
  ['4,600', '104.79', '104.85', '3,500'],
  ['5,100', '104.78', '104.86', '4,200'],
];

/** Original illustration. Every quote, order, and chart value is fictional. */
export default function MarketTerminal() {
  return <div className="market-terminal terminal-dense">
    <div className="terminal-toolbar"><strong>GLOBAL MARKETS / ETF</strong><span>FICTIONAL DATA</span></div>
    <div className="terminal-command"><span>01 &nbsp; MARKET OVERVIEW</span><span>02 &nbsp; DEPTH</span><span>03 &nbsp; EXECUTIONS</span></div>
    <div className="terminal-summary"><span>DEMO / ETF</span><b>104.82</b><small>+1.24%</small><span className="terminal-session">CAD · Sample session</span></div>
    <div className="terminal-body">
      <div className="terminal-chart"><div className="terminal-chart-heading"><span>INTRADAY PRICE</span><span>1D &nbsp; 1W &nbsp; 1M</span></div><svg viewBox="0 0 280 110"><g stroke="#77859133" strokeWidth=".6"><path d="M0 16H280 M0 43H280 M0 70H280 M0 97H280 M56 0V110 M112 0V110 M168 0V110 M224 0V110"/></g><g fill="#48687b55">{[18,23,14,36,26,22,42,37,48,30,51,41,39,54,33,43,48,37,51,45].map((height,i)=><rect key={i} x={i*14} y={110-height*.35} width="8" height={height*.35}/>)}</g><path className="terminal-price" d="M0 90L18 86L31 91L43 79L55 82L70 62L82 68L94 61L107 66L120 43L134 50L148 38L162 44L175 29L186 39L200 27L214 35L228 19L240 24L254 14L266 20L280 12" fill="none" stroke="#efb267" strokeWidth="1.8"/></svg><div className="terminal-axis"><span>105.00</span><span>104.50</span><span>104.00</span><span>103.50</span></div><div className="terminal-times"><span>09:30</span><span>12:00</span><span>16:00</span></div></div>
      <div className="terminal-depth"><div><span>SIZE</span><span>BID</span><span>ASK</span><span>SIZE</span></div>{depth.map((row,i)=><div className="depth-row" key={row[1]} style={{ '--depth': `${25+i*18}%` } as React.CSSProperties}>{row.map((value,j)=><span key={j}>{value}</span>)}</div>)}<p>Spread <b>0.02</b></p><p>Indicative NAV <b>104.80</b></p></div>
    </div>
    <div className="terminal-blotter"><div><span>TIME</span><span>SYMBOL</span><span>SIDE</span><span>QTY</span><span>PRICE</span><span>STATUS</span></div>{[['10:42:08','DEMO','BUY','1,200','104.81'],['10:42:03','DEMO','SELL','800','104.83']].map(row=><div key={row[0]}>{row.map((value,i)=><span key={i}>{value}</span>)}<span>FILLED</span></div>)}</div>
    <div className="terminal-footer"><span>PRICING <i/> EXECUTION <i/> RISK</span><span>Illustrative terminal · Sample values</span></div>
  </div>;
}
