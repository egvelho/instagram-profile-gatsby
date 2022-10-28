import React from "react";
import { Layout } from "../layout/Layout";
import { PostView } from "../components/PostView";

const date = new Date();

const content = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum magna a lorem sodales ultricies. Nulla facilisi. Sed leo purus, maximus euismod pretium eu, tempor in orci. Nullam et interdum arcu, eget efficitur eros. Cras lacinia sit amet diam vitae lacinia. Aliquam est mauris, consectetur ultricies lobortis sed, pulvinar sit amet quam. Quisque dictum scelerisque mi, eget luctus nunc.
Duis non purus quis nunc efficitur dapibus sed non nibh. Nullam laoreet feugiat lorem, a sollicitudin lacus. Sed mollis ut nunc sed lacinia. Nam ac sagittis risus, quis dapibus leo. Ut sed dolor id elit sollicitudin congue. Quisque sodales ex et molestie luctus. Vestibulum eu rutrum ligula, ut molestie magna. Mauris volutpat orci eget sem tristique pellentesque. Aliquam sollicitudin id nulla eu porta. Pellentesque suscipit purus non mauris congue egestas. Quisque est odio, porta non augue posuere, lobortis efficitur nunc. Aenean pharetra tincidunt felis, eget efficitur elit sagittis id.
Mauris nec tempus nunc, id malesuada ante. Nulla dictum vitae leo et varius. Praesent id pulvinar nisi. Integer efficitur, risus a tristique venenatis, est metus rutrum lectus, vitae rutrum diam dui sit amet massa. Vestibulum non interdum lectus, mollis gravida justo. Vivamus bibendum eu tortor congue varius. Fusce sagittis rutrum hendrerit. Curabitur leo nibh, pulvinar ut nulla consequat, eleifend interdum quam. Phasellus aliquam elit at quam tempor volutpat. Vestibulum vulputate accumsan nisi.
Curabitur porttitor accumsan viverra. Etiam turpis urna, congue in efficitur non, porta et eros. Mauris ut rhoncus dui. Curabitur ornare lacus in rutrum vestibulum. Nullam sollicitudin ac metus vitae efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas congue egestas augue, at fermentum ipsum maximus a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vestibulum condimentum arcu massa, eu molestie libero varius quis. Quisque venenatis purus quam, ut tristique odio condimentum eget. Aenean nec fermentum diam. Morbi tincidunt interdum diam ut tincidunt. In id ipsum in mi rutrum accumsan. Cras vestibulum enim nibh, at accumsan ligula sodales ut. Sed rutrum urna at metus auctor faucibus. Sed tincidunt semper velit non rutrum. Proin velit dolor, efficitur in suscipit vel, mollis in ante. Sed pharetra dui quam, et efficitur velit hendrerit sed. Aliquam dignissim, est nec dapibus aliquet, ligula sapien iaculis metus, non mollis ipsum neque lacinia turpis. Nam leo ex, tristique at luctus vel, vulputate eu odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis varius ante. Sed massa tellus, ultricies in odio in, pharetra pulvinar tortor. Morbi malesuada mollis felis. 
`.trim();

export default function Post() {
  return (
    <Layout>
      <div className="post-page">
        <PostView
          authorAvatar="https://eduardovelho.com/images/egvelho.jpg"
          authorUsername="egvelho"
          content={content}
          image="https://loremflickr.com/1000/1000"
          publishDate={date}
        />
      </div>
      <style jsx>{`
        .post-page {
          padding: 36px 0;
        }
      `}</style>
    </Layout>
  );
}
