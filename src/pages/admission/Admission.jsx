import React from 'react';
import { Button, Checkbox, DatePicker, Form, Input, Select } from 'antd';
const { Option } = Select;

const Admission = () => {


    const onFinish = (fieldsValue) => {

        const values = {
            ...fieldsValue,
            'date-of-birth': fieldsValue['dob'].format('YYYY-MM-DD'),
        }
        console.log('Received values of form: ', values);
    };



    return (
        <div className='container mx-auto'>


            <div>
                <div className='block  rounded-lg shadow-lg bg-white mt-5'>


                    <h1 className='bg-[#f3f3f3] p-2 mb-2'>form </h1>

                    <Form onFinish={onFinish}>
                        <div className='grid grid-cols-3 gap-3 p-3 '>

                            {/* class  */}

                            <Form.Item
                                name="class"
                                label="Class"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select class!',
                                    },
                                ]}
                            >
                                <Select placeholder="select your class">
                                    <Option value="six">Six</Option>
                                    <Option value="seven">Neven</Option>
                                    <Option value="nine">Nine</Option>
                                </Select>
                            </Form.Item>



                            <Form.Item
                                name="firstName"
                                label="FirstName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your firstName!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>


                            <Form.Item
                                name="lastName"
                                label="LastName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your lastName!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>



                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select gender!',
                                    },
                                ]}
                            >
                                <Select placeholder="select your gender">
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                </Select>
                            </Form.Item>




                            <Form.Item label="Date of Birth" name="dob" rules={[
                                {
                                    required: true,
                                    message: 'Please input your birth date!',
                                    whitespace: true,
                                },
                            ]}>
                                <DatePicker className='w-full'


                                />
                            </Form.Item>


                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}
                            >
                                <Input
                                    // addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>



                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>






                        </div>
                        <div className="flex justify-end  flex-row gap-4 p-4">



                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                    },
                                ]}
                            // {...tailFormItemLayout}
                            >
                                <Checkbox>
                                    I have read the <a href="">agreement</a>
                                </Checkbox>
                            </Form.Item>


                            <Form.Item >
                                <Button htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                        </div>

                    </Form>


                </div>


            </div>

        </div>
    );
};

export default Admission;









// const { createRoot } = ReactDOM;
// const {
//     AutoComplete,
//     Button,
//     Cascader,
//     Checkbox,
//     Col,
//     Form,
//     Input,
//     InputNumber,
//     Row,
//     Select,
// } = antd;
// const { useState } = React;;
// const { Option } = Select;
// const residences = [
//     {
//         value: 'zhejiang',
//         label: 'Zhejiang',
//         children: [
//             {
//                 value: 'hangzhou',
//                 label: 'Hangzhou',
//                 children: [
//                     {
//                         value: 'xihu',
//                         label: 'West Lake',
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         value: 'jiangsu',
//         label: 'Jiangsu',
//         children: [
//             {
//                 value: 'nanjing',
//                 label: 'Nanjing',
//                 children: [
//                     {
//                         value: 'zhonghuamen',
//                         label: 'Zhong Hua Men',
//                     },
//                 ],
//             },
//         ],
//     },
// ];
// const formItemLayout = {
//     labelCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 8,
//         },
//     },
//     wrapperCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 16,
//         },
//     },
// };
// const tailFormItemLayout = {
//     wrapperCol: {
//         xs: {
//             span: 24,
//             offset: 0,
//         },
//         sm: {
//             span: 16,
//             offset: 8,
//         },
//     },
// };
// const App = () => {
//     const [form] = Form.useForm();
//     const onFinish = (values) => {
//         console.log('Received values of form: ', values);
//     };
//     const prefixSelector = (
//         <Form.Item name="prefix" noStyle>
//             <Select
//                 style={{
//                     width: 70,
//                 }}
//             >
//                 <Option value="86">+86</Option>
//                 <Option value="87">+87</Option>
//             </Select>
//         </Form.Item>
//     );
//     const suffixSelector = (
//         <Form.Item name="suffix" noStyle>
//             <Select
//                 style={{
//                     width: 70,
//                 }}
//             >
//                 <Option value="USD">$</Option>
//                 <Option value="CNY">¥</Option>
//             </Select>
//         </Form.Item>
//     );
//     const [autoCompleteResult, setAutoCompleteResult] = useState([]);
//     const onWebsiteChange = (value) => {
//         if (!value) {
//             setAutoCompleteResult([]);
//         } else {
//             setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
//         }
//     };
//     const websiteOptions = autoCompleteResult.map((website) => ({
//         label: website,
//         value: website,
//     }));
//     return (
//         <Form
//             {...formItemLayout}
//             form={form}
//             name="register"
//             onFinish={onFinish}
//             initialValues={{
//                 residence: ['zhejiang', 'hangzhou', 'xihu'],
//                 prefix: '86',
//             }}
//             style={{
//                 maxWidth: 600,
//             }}
//             scrollToFirstError
//         >
//             <Form.Item
//                 name="email"
//                 label="E-mail"
//                 rules={[
//                     {
//                         type: 'email',
//                         message: 'The input is not valid E-mail!',
//                     },
//                     {
//                         required: true,
//                         message: 'Please input your E-mail!',
//                     },
//                 ]}
//             >
//                 <Input />
//             </Form.Item>

//             <Form.Item
//                 name="password"
//                 label="Password"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input your password!',
//                     },
//                 ]}
//                 hasFeedback
//             >
//                 <Input.Password />
//             </Form.Item>

//             <Form.Item
//                 name="confirm"
//                 label="Confirm Password"
//                 dependencies={['password']}
//                 hasFeedback
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please confirm your password!',
//                     },
//                     ({ getFieldValue }) => ({
//                         validator(_, value) {
//                             if (!value || getFieldValue('password') === value) {
//                                 return Promise.resolve();
//                             }
//                             return Promise.reject(new Error('The two passwords that you entered do not match!'));
//                         },
//                     }),
//                 ]}
//             >
//                 <Input.Password />
//             </Form.Item>

            // <Form.Item
            //     name="nickname"
            //     label="Nickname"
            //     tooltip="What do you want others to call you?"
            //     rules={[
            //         {
            //             required: true,
            //             message: 'Please input your nickname!',
            //             whitespace: true,
            //         },
            //     ]}
            // >
            //     <Input />
            // </Form.Item>

//             <Form.Item
//                 name="residence"
//                 label="Habitual Residence"
//                 rules={[
//                     {
//                         type: 'array',
//                         required: true,
//                         message: 'Please select your habitual residence!',
//                     },
//                 ]}
//             >
//                 <Cascader options={residences} />
//             </Form.Item>

//             <Form.Item
//                 name="phone"
//                 label="Phone Number"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input your phone number!',
//                     },
//                 ]}
//             >
//                 <Input
//                     addonBefore={prefixSelector}
//                     style={{
//                         width: '100%',
//                     }}
//                 />
//             </Form.Item>

//             <Form.Item
//                 name="donation"
//                 label="Donation"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input donation amount!',
//                     },
//                 ]}
//             >
//                 <InputNumber
//                     addonAfter={suffixSelector}
//                     style={{
//                         width: '100%',
//                     }}
//                 />
//             </Form.Item>

//             <Form.Item
//                 name="website"
//                 label="Website"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input website!',
//                     },
//                 ]}
//             >
//                 <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
//                     <Input />
//                 </AutoComplete>
//             </Form.Item>

//             <Form.Item
//                 name="intro"
//                 label="Intro"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input Intro',
//                     },
//                 ]}
//             >
//                 <Input.TextArea showCount maxLength={100} />
//             </Form.Item>

//             <Form.Item
//                 name="gender"
//                 label="Gender"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please select gender!',
//                     },
//                 ]}
//             >
//                 <Select placeholder="select your gender">
//                     <Option value="male">Male</Option>
//                     <Option value="female">Female</Option>
//                     <Option value="other">Other</Option>
//                 </Select>
//             </Form.Item>

//             <Form.Item label="Captcha" extra="We must make sure that your are a human.">
//                 <Row gutter={8}>
//                     <Col span={12}>
//                         <Form.Item
//                             name="captcha"
//                             noStyle
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: 'Please input the captcha you got!',
//                                 },
//                             ]}
//                         >
//                             <Input />
//                         </Form.Item>
//                     </Col>
//                     <Col span={12}>
//                         <Button>Get captcha</Button>
//                     </Col>
//                 </Row>
//             </Form.Item>

//             <Form.Item
//                 name="agreement"
//                 valuePropName="checked"
//                 rules={[
//                     {
//                         validator: (_, value) =>
//                             value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
//                     },
//                 ]}
//                 {...tailFormItemLayout}
//             >
//                 <Checkbox>
//                     I have read the <a href="">agreement</a>
//                 </Checkbox>
//             </Form.Item>
//             <Form.Item {...tailFormItemLayout}>
//                 <Button type="primary" htmlType="submit">
//                     Register
//                 </Button>
//             </Form.Item>


//         </Form>
//     );
// };
// const ComponentDemo = App;


// createRoot(mountNode).render(<ComponentDemo />);



















