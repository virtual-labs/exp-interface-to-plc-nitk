### INTRODUCTION<br>

### PROGRAMMABLE LOGIC CONTROLLER :

<p style="text-align: justify;">A programmable logic controller (PLC) is a device which is used to provide control for an automated process.</p>

#### Why PLC's are preferred?

<p style="text-align: justify;">Using PLC's to achieve automation has many advantages like:
<ol type="1">
<li>Consistency in manufacturing can be easily achieved.</li>
<li>Complete control of the manufacturing process can be achieved.</li>
<li> Accuracy and quality can be improved.</li>
<li>Productivity can be improved.</li>
<li> Makes it easy to work in difficult or hazardous environment.</li>
</ol>
</p>

#### Basic block diagram :
<center>
<img src="images/1.gif" height=350  width=450>

</center>
</br>
<p style="text-align: justify;">A PLC has following sections and each section has unique job to perform.
<ol type="1">
<li><b><u>The sensing section :</b></u><br>
<p style="text-align: justify;">This section consists of limit switches, photoelectric sensors, push buttons etc. These incoming  hardware devices provides input signal to the PLC. These devices are also called as field input devices. The term “field input " is used because this device provides incoming signals that are  tangible items that you physically connect to PLC.</p>
</li>

<li><b><u>Input section :</b></u><br>
<p style="text-align: justify;">This section is majorly divided into 2 parts:
<ul type=disc>
<li>First, the physical screw terminals, where incoming signal (i.e. input), from the field input devices (e.g. limit switch) are connected to the PLC.</li>
<li>The second portion of them input section is the PLC's internal conversion electronics. This section converts and isolates the high-voltage input level from field input devices. High-voltage    signals from field input devices are converted to +5 volts direct current (VDC) for a valid ON input signal, and a 0 VDC for a valid OFF input signal. Incoming signal conversion and isolation is necessary because microprocessor components operate on +5 VDC, whereas an input signal may be of 24 VDC, 120 volts alternating current (VAC), or 220 VDC. If 120 VAC signal is inputted, for example, into 5 VDC, circuit will quickly destroy your PLC.</li>
</ul>
</p>
</li>

<li><b><u>Controller :</b></u><br>
<p style="text-align: justify;">The controller is also known as central processing unit (CPU), or simply as the processor. Central processing unit controls or supervises the entire process. The central processing unit solves the user program and apparently updates the status of the outputs.</p>
</li>

<li><b><u>Programmer :</b></u><br>
<p style="text-align: justify;">The programmer is a device used by the programmer or operator to enter or edit program instructions or data. The programmer can be handheld unit, a personal computer, or an industrial computer programming terminal.</p>
</li>

<li><b><u>Output section :</b></u><br>
<p style="text-align: justify;">The ON or OFF status of the inputs are read and the information is used to solve the user ladder program and the updated signals is sent to the output section. The output section is simply a series of switches, one for each output point, that are controlled by CPU and are used to turn output field devices ON or OFF.</p>
</li>

<li><b><u>Field hardware devices :</b></u><br>
<p style="text-align: justify;">The devices that are controlled by the PLC's output section screw terminals are the field hardware devices.</p>
</li>
</ol>


#### Fixed and modular PLC hardware :

<p >There are two types of physical configurations, fixed and modular. In a fixed PLC, all of its components like, the input section, power supply, CPU and associated memory and output section - is built into one self - contained unit. All the input and output screw terminals are built into the PLC package and are fixed, which cannot be moved i.e. not removable. This type of PLC is also called as a packaged controller.</p>

<p style="text-align: justify;">The modular PLC comes as separate pieces. All the parts of modular PLC are purchased separately i.e. piece by piece. It’s like customizing , we may have  2  or  3  power  supplies  to  choose  from  ,  a  handful  of  different processors(CPU's) , many separate input modules , many separate output modules  and  a  selection  of  assemblies  ,  called  racks  ,  chassis  ,  or baseplates to hold the pieces together .</p>

#### How does a PLC work?

<p style="text-align: justify;">Microprocessor is the heart of any computer, it is also called as processor, or CPU. The central processing unit supervises system control through the user program. After  reading the input signal, the CPU follows the instructions,  that  a  programmer  or  operator  has  stored  in  the  PLC's memory. Depending upon the result of the solved program, the field control devices or outputs are turned ON or OFF. When the PLC is running and following the programmer's instructions, it is called as solving the program.</p>

#### How do PLC's know what they are supposed to do?

<p style="text-align: justify;">A PLC just follows the instructions stored in memory. Each instruction given by the programmer is placed in PLC memory in ascending order. A list of instruction is called as the user ladder program.</p>

#### How does a PLC work?
<p style="text-align: justify;">The instructions which we want our PLC to carry out can be transferred to the controller memory using either handheld programmer or a personal computer.</p>

<p style="text-align: justify;">The first step is to develop the user ladder program. Once the user ladder program  is  verified  for  correctness,  the  next  step  is  to  download  the program into the processor's memory. The process of transferring the user defined PLC program from personal computer's memory into PLC memory is called  as downloading the program. But before downloading the user program, the processor must be in  program mode. Now, if all the inputs and outputs signals are wired to the correct screw terminals, the processor can be put in run mode. In run mode, the program will continuously run and solve the programmed instructions. The process of solving the programmed  instruction  is  sometime  called  as  solving  the  logic.  This constant running of the program in a PLC is called as scanning.</p>

##### NOTE :
</font>
<ul type=disc>
<li>When the PLC is switched into the program mode, all outputs from the PLC are forced OFF regardless of their rung logic status, and the ladder I/O scan sequence is halted.</li>
<li><b>Run mode</b> is used to execute the user program. Input devices are monitored and output devices are energized accordingly.</li>
<li><b>Test mode</b> is used to operate or monitor the user program without energizing any outputs.</li>
<li><b>Remote mode</b> allows the PLC to be remotely changed between program and run mode by a personal computer connected to the PLC processor.</li>
</ul>
<br>

### INTRODUCTION TO DIGITAL PLC INTERFACE :

#### Introduction :

<center>
<img src="images/1a.gif" height=500  width=600>

</center>

<p style="text-align: justify;">There are 16 point, 8 point and 32 point input module. As, an example, Fig (a), let us take a standard input module with 16 points.</p>

<p style="text-align: justify;">Each 16 point input module corresponds to one 16-bit word of data. Also, each input point corresponds to 1 bit in the 16- bit word associated with the input module.</p>

<p style="text-align: justify;">Note:- A bit position cannot be empty, there is either 1 or 0 value in each position all the times.</p>

<center>
<img src="images/b.gif" height=400  width=600>

</center>
<p style="text-align: justify;">In the above figure, input three is a closed switch, which is going into the input screw terminal 3. As  we can see the switch is closed, an ON (1) signal is sent to the input word, in bit position 3. Also from the figure, we can see input 4 is an open switch going into the input screw terminal 4. Since the switch is open, an OFF (0) signal is transferred to the input word, in bit position 4.</p>

<center>
<img src="images/c.gif" height=500  width=600>

</center>

<p style="text-align: justify;">Even eight - point input modules are also available. In these modules, only the lower eight bits of the input word are used.</p>

#### Input status file:

<p style="text-align: justify;">Input status file is a cluster of words in memory, that are organized to store input data. The data which is stored in the input status file is used by the CPU when the program is solved. Each I/O module in a chassis is assigned a specific word in the input status file. Each screw terminal in an input module corresponds to one memory location in the input status file, which can be used to store ON (1) or OFF (0) status of the connected field input devices.</p>

<center>
<img src="images/d.gif" height=500  width=600>

</center>

<p style="text-align: justify;">Above figure shows a 4-slot modular PLC, which contains a power supply, CPU module and 3 input modules. Here each slot in the chassis has a corresponding number. The CPU is slot zero, while input modules are located in slots one through four. The slot number corresponding to a particular input module identifies in which 16-bit word the input status file will store that particular input module's ON or OFF input data. In order to simplify tracking modules in the input status file, the file word assigned to the module is the same as the slot in which the module resides in the modular PLC. As a result, since the CPU resides in slot zero on a SLC 500 modular PLC and there are no input words assigned to the CPU, there will be no word zero in the input status file.</p>

#### The output status file :
<p style="text-align: justify;">The output status file has a function which is similar to input status file with the exception that the output status file stores the ON or OFF status of each output. When the user program is solved, the resulting ON or OFF state of each output point (and its associated field device) is stored in the output status file. Each 16-point output module has one 16-bit word holding the ON or OFF status of each of the module's 16-output screw terminals. This status data is stored is stored in the output status file waiting to be sent to the output module's switching circuitry.</p>

<center>
<img src="images/e.gif" height=500  width=600>

</center>

<p style="text-align: justify;">The above figure represents a four -slot modular PLC, which contains a power supply, a CPU module, and three output modules. Here also each slot of the chassis has a corresponding number. The CPU is in slot zero, while output modules reside in slots one through four. The slot number corresponding to a particular output module identifies in which 16-bit word the output status file will store that particular module's ON or OFF output data.</p>
<p style="text-align: justify;">After solving user ladder program, the CPU sends each 16-bit output status file word to its associated output module by way of backplane. Each output module takes the low-voltage ON or OFF signal, which is represented as 0 or  1  bit  in  the  16-bit  word,  isolates  it,  and  turns  on  or  turns  off  the associated output's switching device. Each output	  module	has	one switching device for each output point. These switching devices may be small mechanical relays, as shown in fig (f), or solid state devices. The output status file bits electrical signal is sent from the status file to power the relay coil output three's relay output point.</p>

<center>
<img src="images/f.gif" height=500  width=600>

</center>
<p style="text-align: justify;">Fig (d)  and  fig  (e)  illustrated  PLC's  with  either  all  input  or  all  output modules. These examples were created to help you understand how status file words correlate with input and output modules. Actual applications will have a mix of input and output modules in the same PLC chassis. One of the major advantages of a modular PLC is the ability to place input and output modules in the selected chassis in the input or output designation required for a specific application.</p>

<p style="text-align: justify;">For example, let us take a seven slot chassis. Here, CPU is placed in slot zero and then, you are free to place any mix of input and output modules you need in the remaining six slots.</p>

<center>
<img src="images/g.gif" height=500  width=600>

</center>

<p style="text-align: justify;">Fig (g) shows a seven - slot chassis with input modules in slot 1,3,4 and 6 and , output modules in  slot 2 and 5 .Each input modules will have an associated word with the same input data file number as the slot in which resides . In a similar manner, each output module will have an associated word in the output status file with the same data file word number as the slot in which it resides. Theses status files are two separate data files. Although they are stored in PLC's memory, they are located in predefined, separate areas used strictly for the storage of either input or output status data.</p>
<p style="text-align: justify;">Notice the gaps in both the input status file's input and output status word sequence. There are no input status words reserved for non - existent slots 2 or 5, not output status words 1, 3,4 or 6.</p>

#### Sixteen point I/O modules with decimal addressing :
<p style="text-align: justify;">A typical  PLC  addressing  is  dependent  on  the  module  type  and  slot position in which the  module resides in the chassis.</p>
<p style="text-align: justify;">In order to explain, consider fig (g).  The component of each screw terminal’s address consists of the slot number, the screw terminal number, and a designation as to whether the I/O point is an input or output.</p>
<p style="text-align: justify;">If a specific screw terminal is input, we begin its address with an I. If a particular screw terminal is an output, we begin its address with an O. The next thing we need to identify is what slot the module is in. The input module in slot one will be identified as I:1 , the output module in slot two is O:2 , the input module in slot three is identified as I:3.</p>


<table cellspacing="30">
<tr>
<td>CPU is always slot 0</td>
<td> No address</td>
</tr>

<tr>
<td>Input module in slot 1</td>
<td>I: 1</td>
</tr>

<tr>
<td>Output module in slot 2</td>
<td>O: 2</td>
</tr>

<tr>
<td>Input module in slot 3</td>
<td>I: 3</td>
</tr>

<tr>
<td>Input module in slot 4</td>
<td>I: 4</td>
</tr>

<tr>
<td>Output module in slot 5</td>
<td>O: 5</td>
</tr>

<tr>
<td>Input module in slot 6</td>
<td>I: 6</td>
</tr>
</table>

<p style="text-align: justify;">Each screw terminal of a 16-point module is identified as 0 through 15, decimal.<br>

Table 1: Addressing structure format</p>

<center>
<img src="images/h.gif" height=300  width=500>

</center>
<p style="text-align: justify;">Address format consists of three parts, see figure below. [Fig (i)]</p>

<center>
<img src="images/i.gif" height=400  width=600>

</center>

<p style="text-align: justify;">Part 1: I for input, or O for output, and a colon to separate the module type from the slot.<br>
Part 2: The module slot number.<br>
Part 3: The dot signifies a word follows. This is the word number. If using an 8 or 16 point module, only one word is necessary. This is the first word 0. When an 8 or 16 point module, the word number is optional.<br>
Part 4: The slash identifies that a bit follows. This is the bit or screw terminal number.<br>

<em>Address format = Input or Output: slot / Screw terminal</em>
</p>

#### I/O interaction with the input and output status files :

<p style="text-align: justify;">Every PLC manufacturer has its own addressing rules. Let us take a typical 16-bit PLC for our explanation.</p>

##### Modular I/O addressing and input and output status file :
<p style="text-align: justify;">Here in our example, PLC is a 16-bit PLC, therefore data is formatted into a 16-bit words. If we use a 16 - point input module, one word of memory contains enough bits for each input screw terminal. However, if we use a 32-point input module, a 16- bit word only contains enough bits for half of the input points. As a result, two words will be necessary to represent 32 input points.</p>
<p style="text-align: justify;">For our explanation, referring to fig(g), let’s assume our modular PLC has the following input and output modules.</p>

<table cellspacing="20">
<tr>
<td>Slot 1</td>
<td>8 - point discrete input module. </td>
</tr>

<tr>
<td>Slot 2</td>
<td>16 - point discrete output module. </td>
</tr>

<tr>
<td>Slot 3</td>
<td>32 - point discrete input modules. </td>
</tr>

<tr>
<td>Slot 4</td>
<td>16 - point discrete input module.</td>
</tr>

<tr>
<td>Slot 5</td>
<td>8 - point discrete output module.  </td>
</tr>

<tr>
<td>Slot 6</td>
<td>16 - point discrete input module. </td>
</tr>

</table>

<p style="text-align: justify;">Table 2: Example of input status file</p>

<center>
<img src="images/j.gif" height=200  width=500>

</center>

<p style="text-align: justify;">Table 3: Example of output status file</p>

<center>
<img src="images/k.gif" height=150  width=500>

</center>
<br>

##### Few observations :

<p style="text-align: justify;">In slot 3, 2 input words are assigned to the 32 - point input module. The first word is I: 3.0 and I: 3.1 is the second word. The lower 16 input addresses, screw terminals 0 through 15, are in the first word. These addresses are I:3.0 / bits 0 through 15. <br>
For example: I: 3. 0 / 0 is input module in slot 3, bit or screw terminal 0. <br>
  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  I: 3. 0 / 5 is input module in slot 3, bit or screw terminal 5.<br>

The addresses for the upper 16 inputs on 32-point module are as follows:<br>
I: 3. 1 / 0 is input module in slot 3, bit or screw terminal 16. Since the lower
16 - bit word contains input points 0 through 15, the second word contains screw terminals or input points 16 through 31.<br>

Remember, the second word is I: 3. 1, so the first bit is I: 3 .1 / 0, or input point 16.<br>

I: 3 .1 / 1 is the input module in slot 3, bit or screw terminal 17. <br>
I: 3 .1 / 2 is the input module in slot 3, bit or screw terminal 18.</p>

#### Fixed I/O addressing :
<p style="text-align: justify;">In fixed PLC manufactured by various companies, the CPU is residing in slot zero, also all I/O screw terminals must also be in slot zero.<br><br>
The addressing for a fixed PLC is as follows: </p>
<p style="text-align: justify;">
    &nbsp;  &nbsp; &nbsp;I: 0 / 3 for input screw terminal 3.<br>
    &nbsp;  &nbsp; &nbsp;I: 0 / 8 for input screw terminal 8.<br>
    &nbsp;  &nbsp; &nbsp;O: 0 / 7 for output screw terminal 7.<br>
   &nbsp;  &nbsp; &nbsp;O: 0 / 0 for output screw terminal 0.<br>
</p>
	</p>
