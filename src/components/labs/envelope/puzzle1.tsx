import { useEnvelope } from "./context";

export default function Puzzle1() {
  const { lockCombo } = useEnvelope();
  return (
    <div>
      <p>{JSON.stringify(lockCombo)}</p>
      <table className="font-mono [&_*_td]:p-2 [&_*_th]:p-2 mx-auto">
        <tbody>
          <tr>
            <td align="center" colSpan={6}>
              <strong>SI Prefixes</strong>
            </td>
          </tr>
          <tr>
            <th>Purpose</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Factor</th>
            <th>Name</th>
          </tr>
          <tr>
            <td colSpan={1} rowSpan={12}>
              <br />
              larger quantities
              <br />
              or whole units
            </td>
            <td align="left">quetta</td>
            <td align="center">Q</td>
            <td align="left">
              10<sup>30</sup>
            </td>
            <td align="left">nonillion</td>
          </tr>
          <tr>
            <td align="left">ronna</td>
            <td align="center">R</td>
            <td align="left">
              10<sup>27</sup>
            </td>
            <td align="left">octillion</td>
          </tr>
          <tr>
            <td align="left">yotta</td>
            <td align="center">Y</td>
            <td align="left">
              10<sup>24</sup>
            </td>
            <td align="left">septillion</td>
          </tr>
          <tr>
            <td align="left">zetta</td>
            <td align="center">Z</td>
            <td align="left">
              10<sup>21</sup>
            </td>
            <td align="left">sextillion</td>
          </tr>
          <tr>
            <td align="left">exa</td>
            <td align="center">E</td>
            <td align="left">
              10<sup>18</sup>
            </td>
            <td align="left">quintillion</td>
          </tr>
          <tr>
            <td align="left">peta</td>
            <td align="center">P</td>
            <td align="left">
              10<sup>15</sup>
            </td>
            <td align="left">quadrillion</td>
          </tr>
          <tr>
            <td align="left">tera</td>

            <td align="center">T</td>
            <td align="left">
              10<sup>12</sup>
            </td>
            <td align="left">trillion</td>
          </tr>
          <tr>
            <td align="left">giga</td>

            <td align="center">G</td>
            <td align="left">
              10<sup>9</sup>
            </td>
            <td align="left">billion</td>
          </tr>
          <tr>
            <td align="left">mega</td>
            <td align="center">M</td>
            <td align="left">
              10<sup>6</sup>
            </td>
            <td align="left">million</td>
          </tr>
          <tr>
            <td align="left">kilo</td>

            <td align="center">k</td>
            <td align="left">
              10<sup>3</sup>
            </td>
            <td align="left">thousand</td>
          </tr>
          <tr>
            <td align="left">hecto</td>

            <td align="center">h</td>
            <td align="left">
              10<sup>2</sup>
            </td>
            <td align="left">hundred</td>
          </tr>
          <tr>
            <td align="left">deka</td>

            <td align="center">da</td>
            <td align="left">
              10<sup>1</sup>
            </td>
            <td align="left">ten</td>
          </tr>
          <tr>
            <td align="left">&nbsp;</td>
            <td align="left">&nbsp;</td>
            <td align="left">&nbsp;</td>
            <td align="left">
              10<sup>0</sup>
            </td>
            <td align="left">one</td>
          </tr>
          <tr>
            <td colSpan={1} rowSpan={12}>
              smaller quantities
              <br />
              or sub units
            </td>
            <td align="left">deci</td>

            <td align="center">d</td>
            <td align="left">
              10<sup>-1</sup>
            </td>
            <td align="left">tenth</td>
          </tr>
          <tr>
            <td align="left">centi</td>

            <td align="center">c</td>
            <td align="left">
              10<sup>-2</sup>
            </td>
            <td align="left">hundredth</td>
          </tr>
          <tr>
            <td align="left">milli</td>

            <td align="center">m</td>
            <td align="left">
              10<sup>-3</sup>
            </td>
            <td align="left">thousandth</td>
          </tr>
          <tr>
            <td align="left">micro</td>

            <td align="center">μ</td>
            <td align="left">
              10<sup>-6</sup>
            </td>
            <td align="left">millionth</td>
          </tr>
          <tr>
            <td align="left">nano</td>

            <td align="center">n</td>
            <td align="left">
              10<sup>-9</sup>
            </td>
            <td align="left">billionth</td>
          </tr>
          <tr>
            <td align="left">pico</td>

            <td align="center">p</td>
            <td align="left">
              10<sup>-12</sup>
            </td>
            <td align="left">trillionth</td>
          </tr>
          <tr>
            <td align="left">femto</td>

            <td align="center">f</td>
            <td align="left">
              10<sup>-15</sup>
            </td>
            <td align="left">quadrillionth</td>
          </tr>
          <tr>
            <td align="left">atto</td>
            <td align="center">a</td>
            <td align="left">
              10<sup>-18</sup>
            </td>
            <td align="left">quintillionth</td>
          </tr>
          <tr>
            <td align="left">zepto</td>

            <td align="center">z</td>
            <td align="left">
              10<sup>-21</sup>
            </td>
            <td align="left">sextillionth</td>
          </tr>
          <tr>
            <td align="left">yocto</td>

            <td align="center">y</td>
            <td align="left">
              10<sup>-24</sup>
            </td>
            <td align="left">septillionth</td>
          </tr>
          <tr>
            <td align="left">ronto</td>
            <td align="center">r</td>
            <td align="left">
              10<sup>-27</sup>
            </td>
            <td align="left">octillionth</td>
          </tr>
          <tr>
            <td align="left">quecto</td>
            <td align="center">q</td>
            <td align="left">
              10<sup>-30</sup>
            </td>
            <td align="left">nonillionth</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
